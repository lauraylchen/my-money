//styles
import styles from './Signup.module.css'

export default function Signup() {
  return (
    <form className={styles['signup-form']}>
      <h2>Signup</h2>
      <label>
        <span>Email:</span>
        <input
          type='email'
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type='password'
        />
      </label>
      <label>
        <span>Display Name:</span>
        <input
          type='text'
        />
      </label>
      <button className='btn'>Signup</button>
    </form>
  )
}
