import TopBarActiveUser__widget from "../TopBarActiveUser/TopBarActiveUser";
import CardActiveUser__entities from "../../entities/CardActiveUser/CardActiveUser";
import Chat__features from "../../features/Chat/Chat";
import {createContext} from "react";
import {useLoaderData, useParams} from "react-router-dom";
import {ContextChat} from "../../app/context/contextChat";

export default function SwitchChat__widget() {

    const dataChat = useLoaderData();

    let { chatId } = useParams();

    return(
        <ContextChat.Provider value={chatId}>
            <div className={'place-chat-wrapper'}>
                { console.log(dataChat)}
                <TopBarActiveUser__widget/>
                <div className={'place-wrapper'}>
                    <Chat__features />
                    <CardActiveUser__entities/>
                </div>
            </div>
        </ContextChat.Provider>
    );
}