
import './ErrorPage.css';
import { PiSmileyXEyes } from "react-icons/pi";
export const ErrorPage = ({errText}) => {
    return (
      <div className='errPage'>
        <PiSmileyXEyes className='smile' />
        <p>{errText}</p>
      </div>
    );
}