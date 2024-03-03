

import YourChats__widget from "../../widgets/YourChats/YourChats";
import Search__widget from "../../widgets/Search/Search";
import ChatRouter from "../../app/routs/ChatRouts";
import TopBarActiveUser__widget from "../../widgets/TopBarActiveUser/TopBarActiveUser";
import CardActiveUser__entities from "../../entities/CardActiveUser/CardActiveUser";
import Navigation__widget from "../../widgets/Navigation/Navigation";


export default function Home() {
    return(
        <main className={'main container'}>
            <Navigation__widget />
            <div className={'page-wrapper'}>
                <Search__widget />
                <div className={'chat-wrapper'}>
                    <YourChats__widget />
                    <div className={'place-chat-wrapper'}>
                        <TopBarActiveUser__widget />
                        <div className={'place-wrapper'}>
                            <ChatRouter />
                            <CardActiveUser__entities />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}