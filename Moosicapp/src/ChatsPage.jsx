//

import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return(
        <div style={{height: '100vh' }}>
            <PrettyChatWindow
                projectId='67223760-6424-46f8-8c84-3121259ae217'
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage