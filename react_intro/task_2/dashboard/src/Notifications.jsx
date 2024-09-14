import './Notifications.css';
import closeIcon from './assets/closeIcon.png';
import { getLatestNotification } from './utils';

export function Notification(){
    return (
        <div className="Notifications">
            <p>Here is the list of notifications
                <button style={
                    {
                        padding: '5px',
                        margin: '5px',
                        borderRadius: '5px',
                        backgroundColor: 'red',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)'
                    }
                } aria-label='Close'
                onClick={() => alert('Close button has been clicked')}
                >
                    <img src={closeIcon} style={{ width: '30px' }} alt='close icon' />
                </button>
            </p>
            <ol>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ol>
        </div>
    );
}