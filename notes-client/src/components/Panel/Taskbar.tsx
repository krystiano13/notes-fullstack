import type { FunctionComponent } from "preact"

interface TaskbarProps {
    username: string,
    logout: () => void
}

const Taskbar: FunctionComponent<TaskbarProps> = ({ username, logout }) => {
    return (
        <div data-aos="fade-down" class="Panel__taskbar d-flex justify-content-end align-items-center">
            <h2 class="Panel__taskbar__h2 me-5 font-head">{username}</h2>
            <button class="Panel__taskbar__btn me-5" onClick={logout}>Logout</button>
        </div>
    )
}

export { Taskbar };