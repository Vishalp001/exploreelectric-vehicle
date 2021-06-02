import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { FiSend } from 'react-icons/fi'

const Subscribe = () => {
  const [state, handleSubmit] = useForm('xwkaovda')
  if (state.succeeded) {
    return <p className='message'>Thanks for joining!</p>
  }

  return (
    <>
      <form id='subscribe' onSubmit={handleSubmit}>
        <div className='subscribe-outline'>
          <div className='subscribe_section'>
            <p>Subscribe to our newsletter</p>
            <div className='subscribe_form'>
              <input
                id='email'
                type='email'
                name='email'
                autoComplete='off'
                placeholder='Enter your email address'
              />
              <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
              />
              <button
                type='submit'
                disabled={state.submitting}
                className='btn btn-primary'
              >
                Subscribe <FiSend />
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Subscribe
