import './ListMessages.css';
import {getChats} from "../../../../../GetChats";
import {Link} from "react-router-dom";

export default function ListMessages({store, id}) {

    const currentChat = getChats(store.chats, id);
    const getUser =  (data, idUser) => { return  data.find( el => el.id === idUser ); }

    return currentChat.map( (item,id) =>

        <li key={id} className={'message'}>
            <div className={'message__img-prof'}></div>
            <div className={'message__body'}>
                <span className={'message__body-head'}>
                    <Link to={`/profile/${getUser(store.users, item.author).id}`} className={'message__body-head-name'}>
                        { getUser(store.users, item.author).nameUser }
                    </Link>
                    <span className={'message__body-head-time'}> { item.time_mess }</span>
                </span>
                <p className={'message__body-text'}>{ item.body_mess }</p>
            </div>
        </li>
    );
}