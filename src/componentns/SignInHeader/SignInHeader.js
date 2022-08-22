import starBucksIcon from '../imgs/starbucks.png'
import './SignInHeader.css'

export const SignInHeader = ()=>{
    return(
        <header className='login-header'>
            <img src={starBucksIcon} alt='starbucks icon'/>
        </header>
    )
}