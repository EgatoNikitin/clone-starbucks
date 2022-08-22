import './SignInFooter.css'

export const SignInFooter = () =>{
    return(
        <footer className='login-footer'>
            <div className='footer--wrapper'>
                <div className='footer--row'>
                    <button type='button' className='footer--button'>
                    Find a store
                    </button>
                    <ul className='footer--list'>
                        <li>
                        Web Accessibility
                        </li>
                        <li>
                        Privacy Policy
                        </li>
                        <li>
                        Terms of Use
                        </li>
                        <li>
                        Cookie Preferences
                        </li>
                    </ul>
                </div>
                
                <div>
                © 2022 Starbucks
                </div>
            </div>
        </footer>
    )
}