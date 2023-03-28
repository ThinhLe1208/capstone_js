import { $, $$ } from '../utils/basic.js';
import { getById } from '../services/api.js';
import { renderDetail, renderRelated } from '../utils/render.js';
import { delay } from '../utils/basic.js';
import { checkLogIn } from '../utils/logIn.js';
import { interactInput, handleAddCart } from '../utils/carts.js';
import { zoomFeature } from '../utils/basic.js';
import { hoverLineMenu } from '../utils/basic.js';

window.onload = async () => {
    checkLogIn();
    hoverLineMenu();

    // var param = new URL(window.location.href or path)
    const URLparam = new URLSearchParams(window.location.search);
    const myParam = URLparam.get('id');
    const data = await getById(myParam);

    // Giả lập mạng yếu
    await delay(1000);

    if (data) {
        renderDetail(data);
        renderRelated(data);
    }

    zoomFeature();
    interactInput();

    $('.detail__add-btn').addEventListener('click', handleAddCart);
};