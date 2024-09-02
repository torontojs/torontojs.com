import React from 'react'

import Cookies from 'js-cookie'
import Modal from '/components/modal'

import './styles.sass'

import { getUser, signOut } from '/lib/session'

deleteParam = (key)->
  url = new URL window.location.href
  return false unless url.searchParams.get(key)?
  url.searchParams.delete key
  history.replaceState null, null, url.toString()
  true

export default \
class JoinUs extends React.Component
  constructor: ->
    super arguments...
    @state =
      user: getUser()
      modal_open: deleteParam 'join-slack'
      requested: false
      request_response: null

  signOut: =>
    signOut()
    @setState user: null

  render: =>
    <Modal
      open={@state.modal_open}
      button={(toggle)=>
        @props.button?(toggle) or <a href="" onClick={toggle}>Join us on Slack</a>
      }
    >
      <div className="join">
        <h2>Join us on Slack</h2>
        {if @state.user
          if @canRequestInvite()
            @requestModal()
          else if @state.request_response
            @state.request_response
          else
            @requestSent()
        else
          <>
            <p>
              To help ensure authenticity, TorontoJS requires you request an invitation with your GitHub account.
            </p>
            <div className="buttons">
              <a
                className="button primary"
                href="https://github.com/login/oauth/authorize?client_id=#{process.env.GITHUB_CLIENT_ID}&scope=read:user,user:email&state=join-slack"
              >
                Sign In with GitHub
              </a>
            </div>
          </>
        }
      </div>
    </Modal>

  requestModal: =>
    {avatar, name, github} = @state.user or {}
    <>
      <div className="user">
        <img className="avatar" src={avatar}/>
        <div className="info">
          <span className="name">{name}</span>
          <span className="github">@{github}</span>
        </div>
      </div>
      <div className="buttons">
        <a className="button primary" onClick={=> @requestInvite()}>
          Request Invitation
        </a>
        <a className="button" onClick={@signOut}>
          Sign Out
        </a>
      </div>
    </>

  requestSent: =>
    <p>
      Your request has been sent!
      <br/>
      <br/>
      You should receive an invitation within a day.
    </p>

  canRequestInvite: =>
    return false unless github = @state.user?.github
    return false if Cookies.get "invitation_requested_at_#{github}"
    not @state.requested

  requestInvite: (evt)=>
    evt?.preventDefault?()
    return false unless github = @state.user?.github
    res = await fetch "/.netlify/functions/request-invitation", method: "GET"
    if res.ok
      Cookies.set "invitation_requested_at_#{github}", (new Date).toISOString(), expires: 7, path: '/'
      @setState requested: true
    else
      @setState requested: false, request_response: <p>There was a problem sending your request.<br/><br/>Please try again later.</p>
