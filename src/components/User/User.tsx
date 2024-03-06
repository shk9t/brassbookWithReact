import {NavLink} from "react-router-dom";
import { useState } from "react";
import classes from "./user.module.css"
import MusicPlayer from "./MusicPlayer";

function User() {

    return (
        <div>
            <div className={classes.div__menu}>
                <svg width="150.043335" height="22.141113" viewBox="0 0 150.043 22.1411" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Логотип" d="M9.32373 21.8188L0 21.8188L0 0L8.73779 0C13.5498 0 15.9814 2.32178 15.9814 5.5957C15.9814 8.15918 14.3042 9.77051 12.041 10.2832L12.041 10.4956C14.5166 10.6128 16.8311 12.561 16.8311 15.791C16.8311 19.2627 14.2236 21.8188 9.32373 21.8188ZM89.0688 21.8188L79.745 21.8188L79.745 0L88.4828 0C93.2948 0 95.7265 2.32178 95.7265 5.5957C95.7265 8.15918 94.0492 9.77051 91.786 10.2832L91.786 10.4956C94.2616 10.6128 96.5761 12.561 96.5761 15.791C96.5761 19.2627 93.9687 21.8188 89.0688 21.8188ZM139.042 21.8188L134.501 21.8188L134.501 0L139.042 0L139.042 11.6675L139.284 11.6675L144.528 5.45654L149.736 5.45654L143.664 12.5391L150.043 21.8188L144.733 21.8188L140.265 15.2271L139.042 16.6187L139.042 21.8188ZM4.61426 3.72803L4.61426 9.1333L8.03467 9.1333C9.91699 9.1333 11.3232 8.08594 11.3232 6.35742C11.3232 4.78271 10.166 3.72803 8.11523 3.72803L4.61426 3.72803ZM84.3593 3.72803L84.3593 9.1333L87.7797 9.1333C89.662 9.1333 91.0683 8.08594 91.0683 6.35742C91.0683 4.78271 89.911 3.72803 87.8603 3.72803L84.3593 3.72803ZM23.6791 21.8188L19.1381 21.8188L19.1381 5.45654L23.54 5.45654L23.54 8.31299L23.7084 8.31299C24.309 6.28418 25.8105 5.22217 27.6415 5.22217C28.1029 5.22217 28.6669 5.28809 29.0697 5.3833L29.0697 9.4043C28.6449 9.27246 27.7807 9.1626 27.1508 9.1626C25.1513 9.1626 23.6791 10.5469 23.6791 12.561L23.6791 21.8188ZM39.7903 19.5483C38.992 21.0718 37.4319 22.1265 35.0076 22.1265C31.8875 22.1265 29.5804 20.4858 29.5804 17.2485C29.5804 13.5938 32.4881 12.5098 35.7254 12.2095C38.5672 11.9312 39.6878 11.792 39.6878 10.7373L39.6878 10.6787C39.6878 9.33105 38.8016 8.55469 37.2561 8.55469C35.6302 8.55469 34.656 9.35303 34.3484 10.4443L30.1516 10.1001C30.7815 7.11914 33.3597 5.24414 37.2781 5.24414C40.9256 5.24414 44.2288 6.88477 44.2288 10.7812L44.2288 21.8188L39.9222 21.8188L39.9222 19.5483L39.7903 19.5483ZM53.8001 5.24414C57.931 5.24414 60.3626 7.10449 60.7655 10.1221L56.6126 10.3784C56.3856 9.32373 55.4481 8.45947 53.8734 8.45947C52.4671 8.45947 51.3612 9.09668 51.3685 10.0781C51.3612 10.8691 51.9251 11.3892 53.4486 11.7188L56.4076 12.3193C59.5863 12.9639 61.1317 14.3848 61.139 16.7505C61.1317 19.9731 58.0921 22.1411 53.8514 22.1411C49.5155 22.1411 46.8568 20.2075 46.4247 17.0801L50.8924 16.8457C51.1707 18.1787 52.2474 18.8672 53.8661 18.8672C55.4481 18.8672 56.5028 18.1787 56.5248 17.2046C56.5028 16.3843 55.8582 15.8643 54.43 15.5786L51.5956 15.0146C48.3949 14.3701 46.8568 12.7881 46.8641 10.3345C46.8568 7.17773 49.6107 5.24414 53.8001 5.24414ZM70.0538 5.24414C74.1847 5.24414 76.6163 7.10449 77.0192 10.1221L72.8663 10.3784C72.6393 9.32373 71.7018 8.45947 70.1271 8.45947C68.7208 8.45947 67.6149 9.09668 67.6222 10.0781C67.6149 10.8691 68.1788 11.3892 69.7023 11.7188L72.6613 12.3193C75.84 12.9639 77.3854 14.3848 77.3927 16.7505C77.3854 19.9731 74.3458 22.1411 70.1051 22.1411C65.7692 22.1411 63.1105 20.2075 62.6784 17.0801L67.1461 16.8457C67.4244 18.1787 68.5011 18.8672 70.1198 18.8672C71.7018 18.8672 72.7565 18.1787 72.7785 17.2046C72.7565 16.3843 72.1119 15.8643 70.6837 15.5786L67.8493 15.0146C64.6486 14.3701 63.1105 12.7881 63.1178 10.3345C63.1105 7.17773 65.8644 5.24414 70.0538 5.24414ZM114.33 13.7036C114.33 18.7427 111.246 22.1411 106.281 22.1411C101.315 22.1411 98.224 18.7427 98.224 13.7036C98.224 8.62793 101.315 5.24414 106.281 5.24414C111.246 5.24414 114.33 8.62793 114.33 13.7036ZM132.139 13.7036C132.139 18.7427 129.056 22.1411 124.09 22.1411C119.124 22.1411 116.033 18.7427 116.033 13.7036C116.033 8.62793 119.124 5.24414 124.09 5.24414C129.056 5.24414 132.139 8.62793 132.139 13.7036ZM102.838 13.667C102.838 16.5234 104.01 18.6255 106.303 18.6255C108.551 18.6255 109.723 16.5234 109.723 13.667C109.723 10.8105 108.551 8.70117 106.303 8.70117C104.01 8.70117 102.838 10.8105 102.838 13.667ZM120.647 13.667C120.647 16.5234 121.819 18.6255 124.112 18.6255C126.36 18.6255 127.532 16.5234 127.532 13.667C127.532 10.8105 126.36 8.70117 124.112 8.70117C121.819 8.70117 120.647 10.8105 120.647 13.667ZM4.61426 12.2534L4.61426 18.0469L8.37158 18.0469C10.9497 18.0469 12.0703 16.9702 12.0703 15.3296C12.0703 13.5278 10.6934 12.2534 8.48145 12.2534L4.61426 12.2534ZM84.3593 12.2534L84.3593 18.0469L88.1166 18.0469C90.6947 18.0469 91.8153 16.9702 91.8153 15.3296C91.8153 13.5278 90.4384 12.2534 88.2265 12.2534L84.3593 12.2534ZM33.9163 17.1021C33.9163 18.3472 34.9124 18.999 36.3113 18.999C38.3035 18.999 39.7171 17.688 39.7171 15.9668L39.7171 14.231C39.1751 14.5972 37.5564 14.8315 36.5677 14.9707C34.971 15.1904 33.9163 15.8203 33.9163 17.1021Z" fill="#230B3F" fill-opacity="1.000000" fill-rule="evenodd"/></svg>
                <p className={classes.signin__backlink}>Меню</p>
                <ul className={classes.ul__menu1}>
                    <a href=""><svg width="18.000000" height="19.987488" viewBox="0 0 18 19.9875" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Vector" d="M15 0L3 0C1.34003 0 0 1.33002 0 2.96997L0 13.88C0 15.52 1.34003 16.85 3 16.85L3.76001 16.85C4.56 16.85 5.32001 17.16 5.88 17.72L7.59003 19.41C8.37 20.18 9.64001 20.18 10.42 19.41L12.13 17.72C12.69 17.16 13.46 16.85 14.25 16.85L15 16.85C16.66 16.85 18 15.52 18 13.88L18 2.96997C18 1.33002 16.66 0 15 0ZM9 3.75C10.29 3.75 11.33 4.78998 11.33 6.08002C11.33 7.37 10.29 8.40997 9 8.40997C7.71002 8.40997 6.66998 7.35999 6.66998 6.08002C6.66998 4.78998 7.71002 3.75 9 3.75ZM11.68 13.06L6.32001 13.06C5.51001 13.06 5.03998 12.16 5.48999 11.49C6.16998 10.48 7.48999 9.79999 9 9.79999C10.51 9.79999 11.83 10.48 12.51 11.49C12.96 12.16 12.48 13.06 11.68 13.06Z" fill="rgb(35, 11, 63)" fill-opacity="1.000000" fill-rule="nonzero"/></svg>
    Личный кабинет</a>
                    <a href=""><svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><g opacity="0.000000"/><path id="Vector" d="M18 5.25L6 5.25C5.59003 5.25 5.25 4.91 5.25 4.5C5.25 4.09 5.59003 3.75 6 3.75L18 3.75C18.41 3.75 18.75 4.09 18.75 4.5C18.75 4.91 18.41 5.25 18 5.25Z" fill="#230B3F" fill-opacity="1.000000" fill-rule="nonzero"/><path id="Vector" d="M15 2.75L9 2.75C8.59003 2.75 8.25 2.41 8.25 2C8.25 1.59 8.59003 1.25 9 1.25L15 1.25C15.41 1.25 15.75 1.59 15.75 2C15.75 2.41 15.41 2.75 15 2.75Z" fill="#230B3F" fill-opacity="1.000000" fill-rule="nonzero"/><path id="Vector" d="M13.91 16.21C13.57 16.21 13.29 16.49 13.29 16.83C13.29 17.17 13.57 17.45 13.91 17.45C14.25 17.45 14.53 17.17 14.53 16.83C14.53 16.49 14.25 16.21 13.91 16.21Z" fill="#230B3F" fill-opacity="1.000000" fill-rule="nonzero"/><path id="Vector" d="M9.51001 17.74C9.51001 17.4 9.23004 17.13 8.89001 17.13C8.55005 17.13 8.27002 17.41 8.27002 17.75C8.27002 18.09 8.55005 18.37 8.89001 18.37C9.23004 18.36 9.51001 18.08 9.51001 17.74Z" fill="#230B3F" fill-opacity="1.000000" fill-rule="nonzero"/><path id="Vector" d="M18 7L6 7C3.79999 7 2 8.79999 2 11L2 18C2 20.2 3.79999 22 6 22L18 22C20.2 22 22 20.2 22 18L22 11C22 8.79999 20.2 7 18 7ZM16.03 12.46L16.03 16.83C16.03 16.85 16.02 16.86 16.02 16.88C15.99 18.02 15.06 18.95 13.91 18.95C12.74 18.95 11.79 18 11.79 16.83C11.79 15.66 12.74 14.71 13.91 14.71C14.13 14.71 14.33 14.75 14.53 14.81L14.53 13.44L11.01 14.4L11.01 17.73L11.01 17.74C11.01 18.91 10.06 19.86 8.89001 19.86C7.71997 19.86 6.77002 18.91 6.77002 17.74C6.77002 16.57 7.71997 15.62 8.89001 15.62C9.10999 15.62 9.31 15.66 9.51001 15.72L9.51001 13.82L9.51001 12.22C9.51001 11.33 10.06 10.61 10.91 10.39L13.64 9.64001C14.52 9.41 15.06 9.64001 15.37 9.88C15.67 10.11 16.03 10.58 16.03 11.47L16.03 12.46Z" fill="#230B3F" fill-opacity="1.000000" fill-rule="nonzero"/></svg>
    Произведения</a>
                    <a href=""><svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Vector" d="M22 4.85001L22 16.74C22 17.71 21.21 18.6 20.24 18.72L19.93 18.76C18.29 18.98 15.98 19.66 14.12 20.44C13.47 20.71 12.75 20.22 12.75 19.51L12.75 5.60001C12.75 5.22998 12.96 4.88998 13.29 4.70999C15.12 3.72 17.89 2.84 19.77 2.67999L19.83 2.67999C21.03 2.67999 22 3.64999 22 4.85001Z" fill="#230B3F" fill-opacity="1.000000" fill-rule="nonzero"/><path id="Vector" d="M10.71 4.70999C8.88 3.72 6.10999 2.84 4.22998 2.67999L4.15997 2.67999C2.95996 2.67999 1.98999 3.64999 1.98999 4.85001L1.98999 16.74C1.98999 17.71 2.77997 18.6 3.75 18.72L4.06 18.76C5.70001 18.98 8.01001 19.66 9.87 20.44C10.52 20.71 11.24 20.22 11.24 19.51L11.24 5.60001C11.24 5.22 11.04 4.88998 10.71 4.70999ZM5 7.73999L7.25 7.73999C7.65997 7.73999 8 8.07999 8 8.48999C8 8.91 7.65997 9.23999 7.25 9.23999L5 9.23999C4.58997 9.23999 4.25 8.91 4.25 8.48999C4.25 8.07999 4.58997 7.73999 5 7.73999ZM8 12.24L5 12.24C4.58997 12.24 4.25 11.91 4.25 11.49C4.25 11.08 4.58997 10.74 5 10.74L8 10.74C8.40997 10.74 8.75 11.08 8.75 11.49C8.75 11.91 8.40997 12.24 8 12.24Z" fill="#230B3F" fill-opacity="1.000000" fill-rule="nonzero"/><g opacity="0.000000"/></svg>
    Библиотека</a>
                    <a href=""><svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Vector" d="M12.6777 19.957C12.9524 20.0209 12.9776 20.3808 12.71 20.47L11.13 20.99C7.15997 22.27 5.06995 21.2 3.77997 17.23L2.5 13.28C1.21997 9.31 2.27997 7.20999 6.25 5.92999L6.77399 5.75644C7.17682 5.62305 7.56891 6.02713 7.45447 6.43582C7.39777 6.63837 7.34326 6.84976 7.28998 7.06998L6.31 11.26C5.20996 15.97 6.81995 18.57 11.53 19.69L12.6777 19.957Z" fill="#230B3F" fill-opacity="1.000000" fill-rule="nonzero"/><path id="Vector" d="M17.17 3.21002L15.5 2.82001C12.16 2.03 10.17 2.67999 9 5.10001C8.70001 5.71002 8.46002 6.45001 8.26001 7.30002L7.27997 11.49C6.29999 15.67 7.59003 17.73 11.76 18.72L13.44 19.12C14.02 19.26 14.56 19.35 15.06 19.39C18.18 19.69 19.84 18.23 20.68 14.62L21.66 10.44C22.64 6.26001 21.36 4.19 17.17 3.21002ZM15.29 13.33C15.2 13.67 14.9 13.89 14.56 13.89C14.5 13.89 14.44 13.88 14.37 13.87L11.46 13.13C11.06 13.03 10.82 12.62 10.92 12.22C11.02 11.82 11.43 11.58 11.83 11.68L14.74 12.42C15.15 12.52 15.39 12.93 15.29 13.33ZM18.22 9.95001C18.13 10.29 17.83 10.51 17.49 10.51C17.43 10.51 17.37 10.5 17.3 10.49L12.45 9.26001C12.05 9.16 11.81 8.75 11.91 8.35001C12.01 7.95001 12.42 7.71002 12.82 7.81L17.67 9.04001C18.08 9.13 18.32 9.54001 18.22 9.95001Z" fill="#230B3F" fill-opacity="1.000000" fill-rule="nonzero"/><g opacity="0.000000"/></svg>
    Публикации</a>
                </ul>
                <p className={classes.signin__backlink}>Мои альбомы</p>
                <ul className={classes.ul__menu2}>
                    <a href="">Избранное</a>
                    <a href="">Мои записи</a>
                    <a href="">Название</a>
                    <a href="">Короткое название</a>
                    <a href="">Длинное название</a>
                </ul>
                <button className={classes.button__all}>Посмотреть все <svg width="6.368774" height="11.667211" viewBox="0 0 6.36877 11.6672" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Vector" d="M5.84998 4.57657L4.20831 2.9349L1.53333 0.2599C0.966675 -0.298433 0 0.101567 0 0.901567L0 6.09323L0 10.7682C0 11.5682 0.966675 11.9682 1.53333 11.4016L5.84998 7.0849C6.54169 6.40157 6.54169 5.26823 5.84998 4.57657Z" fill="#230B3F" fill-opacity="0.300000" fill-rule="nonzero"/></svg></button>
                <MusicPlayer/>
                <NavLink to='/signin' className={classes.a__exit}><svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Vector" d="M16.8 2L14.2 2C11 2 9 4 9 7.2L9 11.25L15.25 11.25C15.66 11.25 16 11.59 16 12C16 12.41 15.66 12.75 15.25 12.75L9 12.75L9 16.8C9 20 11 22 14.2 22L16.79 22C19.99 22 21.99 20 21.99 16.8L21.99 7.2C22 4 20 2 16.8 2Z" fill="#230B3F" fill-opacity="1.000000" fill-rule="nonzero"/><path id="Vector" d="M4.56 11.25L6.63 9.18002C6.78003 9.03003 6.84998 8.84003 6.84998 8.65002C6.84998 8.46002 6.78003 8.26003 6.63 8.12003C6.34003 7.83003 5.85999 7.83003 5.57001 8.12003L2.22003 11.47C1.92999 11.76 1.92999 12.24 2.22003 12.53L5.57001 15.88C5.85999 16.17 6.34003 16.17 6.63 15.88C6.91998 15.59 6.91998 15.11 6.63 14.82L4.56 12.75L9 12.75L9 11.25L4.56 11.25Z" fill="#230B3F" fill-opacity="1.000000" fill-rule="nonzero"/><g opacity="0.000000"/></svg>
    Выход</NavLink>
            </div>
            <div></div>
        </div>
    )
}

export default User