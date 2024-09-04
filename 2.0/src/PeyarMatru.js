// ./redux/PeyarMatru.js
import { PEYARMATRU } from "./redux/cons";

const Peyarmatru = (uName) => {
    return {
        type: PEYARMATRU,
        payload:uName
    };
};

export default Peyarmatru;
