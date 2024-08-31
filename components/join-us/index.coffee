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
              To help combat bad actors, TorontoJS requires you to request an invitation using you GitHub account.
            </p>
            <p>
              <a
                className="button primary"
                href="https://github.com/login/oauth/authorize?client_id=#{process.env.GITHUB_CLIENT_ID}&scope=read:user,user:email&state=join-slack">
                <span className="label">
                  Sign In with GitHub
                </span>
              </a>
            </p>
          </>
        }
      </div>
    </Modal>

  requestModal: =>
    <>
      <div className="user">
        <img className="avatar" src={@state.user.avatar}/>
        <div className="info">
          <span className="name">{@state.user.name}</span>
          <span className="github">@{@state.user.github}</span>
        </div>
      </div>
      <div className="buttons">
        <a className="button primary" onClick={=> @requestInvite()}>
          Request Invitation
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

  github: =>
    @props?.user?.github

  canRequestInvite: =>
    return false if Cookies.get "invitation_requested_at_#{@github()}"
    not @state.requested

  requestInvite: (evt)=>
    evt?.preventDefault?()
    res = await fetch "/slack/request-invitation", method: "GET"
    if res.ok
      Cookies.set "invitation_requested_at_#{@github()}", (new Date).toISOString(), expires: 7, path: '/'
      @setState requested: true
    else
      @setState requested: false, request_response: <p>There was a problem sending your request.<br/><br/>Please try again later.</p>