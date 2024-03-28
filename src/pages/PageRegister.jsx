import { FirstTry } from "../components/FirstTry";

export function PageRegister() {
    return (
        <>
            <h1>Register</h1>
            <form>
                <div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder ="Eg. John" />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder ="Eg. John@cena.com" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder ="youcantseemenow" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder ="youcantseemenow" />
                </div>
                <div>
                    <label htmlFor="">Repeat password</label>
                    <input type="password" placeholder ="youcantseemenow" />
                </div>
            </form>
        </>
    )
}