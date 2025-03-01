import axios from "axios";
import store from "../store";
export async function getSessionInfo() {
    try {
        // 获取会话信息
        const { data: info } = await axios.get(
            localStorage.addr + "/sessionInfo?sessionKey=" + localStorage.sessionKey
        );
        console.log(info);
        //   如果认证失败
        if (info.code != 0) {
            return {
                code: 3,
                msg: info.msg
            };
        } else {
            store.commit("sessionInfo", info.data);
            return {
                code: 0,
                msg: '认证成功'
            };
        }
    } catch (err) {
        console.log(err.message);
        return false
        // throw new Error(err);
    }
}