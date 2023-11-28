import styles from "./ChatComponent.module.css";

export default function ChatList({chats}) {
    return (
        <section className={styles.section_container}>
            {chats && chats.length
            ? chats.map((chat, index) => (
                <div key={index} className={chat.role === "user" ? `${styles.user_msg}` : chat.content === "wait" ? `${styles.assistant_msg} ${styles.assistant_wait_msg}` : `${styles.assistant_msg}`}>
                    <span>
                    <b>{chat.content === "wait" ? "" : chat.role.toUpperCase()}</b>
                    </span>
                    <span> </span>
                    <span>{chat.content === "wait" ? "" : chat.content}</span>
                </div>
                ))
            : ""}
        </section>        
    );
}