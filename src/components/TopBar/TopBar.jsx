import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { saveRoundHistory } from "../../store/actions/scoreActions";
import RoundHistory from "../RoundHistory/RoundHistory";
import "./TopBar.css";

const TopBar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const moneyData = useSelector((state) => state.money.currentMoney);

    const formatNumber = (number) => {
        const formattedNumber = new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(number)
        return formattedNumber.replace(',', '.');
    }

    return (
        <>
            <div className="header__line--top">
                <div className="header-line-left">
                    <div className="level-item">
                        <button className="button mini-icon theme-default ttn header-button df-aic-jcc">
                            <svg data-v-03d794d0="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" aria-hidden="true" role="img" className="icon icon-lock sm inline access-icon access-icon"><path d="M26.76 16.08H9.62a1.86 1.86 0 00-1.85 1.85v7.37a6.43 6.43 0 006.41 6.42H22a6.3 6.3 0 006.28-6.28v-7.86a1.5 1.5 0 00-1.52-1.5zm-8.45 8.78v1.74a.57.57 0 01-.57.54.58.58 0 01-.58-.54v-1.75a2.42 2.42 0 01-1.87-2.39 2.46 2.46 0 114.92 0 2.42 2.42 0 01-1.9 2.39zM18.06 4.23h-.12A6.75 6.75 0 0011.22 11v4h1.13v-4.12A5.46 5.46 0 0114 7a5.56 5.56 0 013.93-1.61H18A5.62 5.62 0 0123.52 11v3.89h1.13v-4a6.72 6.72 0 00-6.59-6.66z"></path></svg>
                        </button>
                        <button className="button mini-icon theme-default ttn header-button df-aic-jcc">
                            <svg data-v-03d794d0="" width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon icon-mobile sm inline access-icon access-icon"><path fillRule="evenodd" clipRule="evenodd" d="M12 0c1.657 0 3 1.28 3 2.857v14.286C15 18.72 13.657 20 12 20H3c-1.657 0-3-1.28-3-2.857V2.857C0 1.28 1.343 0 3 0h9zM4.5 1.429v.428a1 1 0 001 1h4a1 1 0 001-1V1.43H12l.175.01c.746.082 1.325.686 1.325 1.418v14.286l-.01.166c-.087.71-.72 1.262-1.49 1.262H3l-.175-.01c-.746-.082-1.325-.686-1.325-1.418V2.857l.01-.166c.087-.711.72-1.262 1.49-1.262h1.5z" fill="#fff"></path></svg>
                        </button>
                    </div>
                    <div className="divider">
                    </div>
                    <a className="freeMoneyLink_root_sudSD">
                        <span className="freeMoneyLink_root_text">Free Money!</span>
                        <span className="freeMoneyLink_image" style={{ backgroundImage: 'url("https://v1.bundlecdn.com/img/free-money-link-image.1ada0c9e1-120.png")' }}></span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true" role="img" className="icon icon-arrow-right freeMoneyLink_arrow_cMaRG"><path d="M218.101 38.101L198.302 57.9c-4.686 4.686-4.686 12.284 0 16.971L353.432 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h341.432l-155.13 155.13c-4.686 4.686-4.686 12.284 0 16.971l19.799 19.799c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L235.071 38.101c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>
                    </a>
                </div>
                <div className="header-line-right">
                    <div className="header-line-right--item">
                        <div className="df">
                            <div className="BonusLink_root_fPfSB">
                                <div className="BonusLink_circle_kBCQX">
                                    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon icon-present-bonus">
                                        <g clipPath="url(#present-bonus_svg__clip0_2013_58512)">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M2.55.683A2.333 2.333 0 014.2 0 3.265 3.265 0 017 1.583 3.265 3.265 0 019.8 0a2.333 2.333 0 012.333 2.333V2.6c0 .418-.124.808-.337 1.133h.804a1.4 1.4 0 011.4 1.4v.934a1.4 1.4 0 01-1.4 1.4H7.467V3.733h2.6c.625 0 1.133-.507 1.133-1.133v-.267a1.4 1.4 0 00-1.4-1.4 2.333 2.333 0 00-2.333 2.334v.466h-.934v-.466A2.333 2.333 0 004.2.933a1.4 1.4 0 00-1.4 1.4V2.6c0 .626.508 1.133 1.133 1.133h2.6v3.734H1.4a1.4 1.4 0 01-1.4-1.4v-.934a1.4 1.4 0 011.4-1.4h.805A2.058 2.058 0 011.867 2.6v-.267c0-.619.245-1.212.683-1.65zM.933 8.4h5.6V14H3.267a2.333 2.333 0 01-2.334-2.333V8.4zm9.8 5.6H7.467V8.4h5.6v3.267A2.333 2.333 0 0110.733 14z" fill="#fff">
                                            </path>
                                        </g>
                                        <defs>
                                            <clipPath id="present-bonus_svg__clip0_2013_58512">
                                                <path fill="#fff" d="M0 0h14v14H0z"></path>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="BonusLink_text_qr3iZ">Акции и бонусы</div>
                                <img className="BonusLink_image_LmUxS" src="https://v1.bundlecdn.com/img/present-with-light.bd57fb068-151.png" />
                            </div>
                            <a data-v-03d794d0="" href="/free-money" className="HeaderTopCarRaffle_root_cjP3m">
                                <span className="HeaderTopCarRaffle_prefix_NNQsu">
                                    <img src="https://v1.bundlecdn.com/img/carRaffleDesktopHeaderTicket.1a4740acc.svg" />
                                </span>
                                <p className="HeaderTopCarRaffle_text_xl8mW">
                                    Lucky Drive
                                    <div className="LuckyDriveLiveBadge_root_SlYAA LuckyDriveLiveBadge_small_tGiKK HeaderTopCarRaffle_textBadge_L0yhK">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon icon-live-symbol" >
                                            <path d="M10.15 8.264a2.15 2.15 0 11-4.3 0 2.15 2.15 0 014.3 0z" fill="currentColor"></path>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.47 4.598a.666.666 0 01-.03.942 3.738 3.738 0 00-.083 5.368.666.666 0 01-.942.942 5.071 5.071 0 01.114-7.281.666.666 0 01.941.029z" fill="currentColor"></path>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.251 2.636c.262.259.265.68.006.942a6.668 6.668 0 00-.431 8.891.666.666 0 11-1.035.84A8 8 0 012.31 2.643a.666.666 0 01.942-.006zM10.53 4.598a.666.666 0 00.03.942 3.74 3.74 0 01.083 5.368.666.666 0 10.942.942 5.07 5.07 0 00-.114-7.281.666.666 0 00-.941.029z" fill="currentColor"></path>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12.749 2.636a.666.666 0 00-.006.942 6.667 6.667 0 01.431 8.891.666.666 0 101.035.84 8 8 0 00-.518-10.667.666.666 0 00-.942-.006z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </p>
                                <img src="https://d16q5vvir3f28d.cloudfront.net/raffle-20240705/headerLink.png" className="HeaderTopCarRaffle_image_Crqu5" />
                            </a>
                        </div>

                    </div>
                    <div className="header-line-right--item">
                        <div className="df">
                            <div data-v-7ce49f57="" data-v-03d794d0="" className="header-desktop-apps">
                                <div data-v-7ce49f57="" className="text">
                                    <div data-v-7ce49f57="" className="bold">Приложение</div>
                                    <div data-v-7ce49f57="">для Windows</div>
                                </div>
                                <div data-v-47f19f5f="" data-v-7ce49f57="" className="pwa small app-icon">
                                    <div data-v-47f19f5f="" className="pwa-container">
                                        <div data-v-47f19f5f="" className="pwa-button">
                                            <div data-v-47f19f5f="" className="pwa-button-title">Windows</div>
                                            <div data-v-47f19f5f="" className="pwa-button-text">App</div>
                                        </div>
                                        <svg data-v-47f19f5f="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39" aria-hidden="true" role="img" className="icon icon-windows sm pwa-icon pwa-icon">
                                            <path fill="#FFF" d="M0 5.496l15.816-2.154.007 15.256-15.809.09L0 5.496zm15.808 14.86l.013 15.269L.012 33.45V20.253l15.796.103zM17.726 3.06L38.696 0v18.404l-20.97.166V3.06zM38.7 20.499l-.005 18.322-20.97-2.96-.03-15.396 21.005.034z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div data-v-03d794d0="" className="spacer"></div>
                            <div data-v-76f50cf7="" data-v-03d794d0="" className="Tooltip_tooltip_Vixmg">
                                <div data-v-76f50cf7="" className="header-mobile-apps">
                                    <div data-v-76f50cf7="" className="app-button">
                                        <svg data-v-76f50cf7="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 12" aria-hidden="true" role="img" className="icon icon-android sm margin square VIconSvgGradient_icon_WJLeK VIconSvgGradient_icon_WJLeK"><path d="M1.54 4.637v3.095c0 .411-.324.74-.736.74-.408 0-.804-.331-.804-.74V4.637c0-.404.396-.735.804-.735.404 0 .735.331.735.735zm.288 4.196a.79.79 0 00.791.791h.532l.008 1.633c0 .986 1.475.978 1.475 0V9.624h.995v1.633c0 .98 1.483.984 1.483 0V9.624h.54a.788.788 0 00.785-.791V4.038H1.828v4.795zm6.628-5.054H1.8c0-1.144.684-2.138 1.7-2.657L2.987.18c-.075-.13.115-.214.179-.101l.519.951a3.61 3.61 0 012.894 0l.517-.95c.067-.115.254-.03.179.102l-.51.94c1.007.519 1.691 1.513 1.691 2.657zM3.894 2.296a.28.28 0 00-.28-.28.277.277 0 00-.273.28c0 .152.123.28.272.28a.28.28 0 00.281-.28zm3.03 0a.279.279 0 00-.272-.28.28.28 0 100 .56c.15 0 .273-.128.273-.28zm2.534 1.606a.733.733 0 00-.735.735v3.095c0 .411.332.74.735.74.412 0 .805-.331.805-.74V4.637c0-.412-.396-.735-.805-.735z" ></path></svg>
                                    </div>
                                    <div data-v-76f50cf7="" className="app-button">
                                        <svg data-v-76f50cf7="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 23" aria-hidden="true" role="img" className="icon icon-ios sm margin square VIconSvgGradient_icon_WJLeK VIconSvgGradient_icon_WJLeK"><path d="M15.86 11.93c-.01-1.85.827-3.246 2.52-4.275-.947-1.355-2.379-2.101-4.269-2.247-1.789-.141-3.744 1.043-4.46 1.043-.756 0-2.49-.993-3.85-.993C2.989 5.503 0 7.701 0 12.171c0 1.32.242 2.686.726 4.092.645 1.85 2.973 6.386 5.402 6.31 1.27-.03 2.167-.902 3.82-.902 1.603 0 2.435.902 3.85.902 2.45-.035 4.557-4.158 5.172-6.012-3.286-1.547-3.11-4.536-3.11-4.632zm-2.852-8.276C14.384 2.02 14.258.534 14.218 0c-1.215.07-2.621.827-3.423 1.759-.882.998-1.4 2.233-1.29 3.623 1.315.101 2.515-.574 3.503-1.728z"></path></svg>
                                    </div>
                                </div>
                                <div className="Tooltip_content_D_xMG" style={{ width: "auto", position: "fixed", inset: "0px auto auto 0px", margin: "0px", transform: "translate(1091px, 53px)", display: "none" }} data-popper-placement="bottom">
                                    <div className="TooltipContent_content_oh74_">
                                        <div className="TooltipContent_arrow_XkNAB TooltipContent_bottom_ueIH2" data-popper-arrow="data-popper-arrow" style={{ position: "absolute", left: "0px", transform: "translate(126px, 0px)" }}>
                                            <svg width="23" height="8" fill="%23fff" xmlns="http://www.w3.org/2000/svg" className="TooltipContent_arrowImage_vsSHC"><path fillRule="evenodd" d="M11 0c3.85 0 6.053 7.997 11.003 7.997L0 8c4.953 0 7.15-8 11-8"></path>
                                            </svg>
                                        </div>
                                        <div data-v-21d75dd4="" data-v-76f50cf7="" className="mobile-pwa-info">
                                            <div data-v-1bb8a4fc="" data-v-21d75dd4="" className="v-image">
                                                <div data-v-1bb8a4fc="" className="v-image-sizing" style={{ paddingBottom: "calc(65.2174%)" }}></div>
                                                <img data-v-1bb8a4fc="" srcSet="https://v1.bundlecdn.com/img/pwa_android_en.b229a444a-690.png 690w" src="https://v1.bundlecdn.com/img/pwa_android_en.b229a444a-690.png" className="v-image-ratio" />
                                            </div>
                                            <div data-v-21d75dd4="" className="mobile-pwa-info-text">
                                                <div data-v-21d75dd4="">
                                                    <div data-v-21d75dd4="">
                                                        <div data-v-21d75dd4="">Visit the site from your smartphone, install the app right now and get RUB&nbsp;5,000 in your bonus account!</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-v-03d794d0="" className="spacer"></div>
                        </div>
                    </div>
                    <div className="header-line-right--item">
                        <div data-v-03d794d0="" className="ChangeLanguage_root_xbrQJ">
                            <button className="ChangeLanguage_button_kffnJ" type="button">
                                <span className="ChangeLanguage_buttonTitle_eh_mm">RU</span>
                                <svg viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon icon-smooth-arrow-up sm ChangeLanguage_buttonIcon_mtO76 ChangeLanguage_buttonIcon_mtO76">
                                    <path d="M1.238 3.957a.75.75 0 11-.976-1.139L2.899.558a1 1 0 011.302 0l2.637 2.26a.75.75 0 01-.976 1.14L3.55 1.974 1.238 3.957z"></path>
                                </svg>
                                <div className="CountryIcon_root_Uixdl">
                                    <img alt="Country flag" class="CountryIcon_image_cLYV2 CountryIcon_rounded_hPm2C" src="https://v1.bundlecdn.com/img/flags/ru.svg" width="16" height="16" />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="header-line-right--item">
                        <div data-v-03d794d0="" className="HeaderSupportPanel_container_HcTkg">
                            <div className="HeaderSupportPanel_text_kMhzu">
                                <div className="HeaderSupportPanel_title_xo0ZY">Поддержка 24/7</div>
                                <div className="HeaderSupportPanel_subtitle_OsP0n">Задать вопрос</div>
                            </div>
                            <button data-v-bd746ee2="" data-v-74c04630="" className="button size-sm theme-default support-button HeaderSupportPanel_call_g1Bh2" type="button">
                                <svg data-v-74c04630="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true" role="img" className="icon icon-phone sm"><path d="M497.39 361.8l-112-48a24 24 0 00-28 6.9l-49.6 60.6A370.66 370.66 0 01130.6 204.11l60.6-49.6a23.94 23.94 0 006.9-28l-48-112A24.16 24.16 0 00122.6.61l-104 24A24 24 0 000 48c0 256.5 207.9 464 464 464a24 24 0 0023.4-18.6l24-104a24.29 24.29 0 00-14.01-27.6z"></path>
                                </svg>
                            </button>
                            <button data-v-bd746ee2="" data-v-74c04630="" className="button size-sm theme-default support-button" type="button">
                                <svg data-v-74c04630="" xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" aria-hidden="true" role="img" className="icon icon-comment sm"><path fill="currentColor" d="M8 0C3.581 0 0 2.91 0 6.5c0 1.55.669 2.969 1.781 4.084C1.391 12.16.084 13.563.07 13.578a.248.248 0 00-.047.272c.04.094.128.15.228.15 2.072 0 3.625-.994 4.394-1.606A9.53 9.53 0 008 13c4.419 0 8-2.91 8-6.5S12.419 0 8 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div data-v-5bf5e3a4="" data-v-359cbd9e="" className="header__line--bottom">
                <div data-v-5bf5e3a4="" className="level-list">
                    <div data-v-5bf5e3a4="" className="level-item">
                        <div data-v-5bf5e3a4="" className="logo-container">
                            <a data-v-5bf5e3a4="" href="/" className="logo-link">
                                <div data-v-5bf5e3a4="" className="SvgLogo_svgLogoContainer_MdO5l">
                                    <img src="https://v1.bundlecdn.com/img/1win-normal.34748aac6.svg" className="SvgLogo_svgLogo_tYTbP" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div data-v-5bf5e3a4="" className="level-item fill">
                        <div data-v-5bf5e3a4="" className="FluidCoverWrapper_wrapper_G9VqC">
                            <nav data-v-513d1bb8="" data-v-5bf5e3a4="" className="navigation loaded" style={{ maxWidth: "1142px" }}>
                                <div data-v-513d1bb8="" className="navigation-navbar">
                                    <a data-v-513d1bb8="" href="/" className="navigation-item df-aic-jcc">
                                        <div data-v-513d1bb8="" className="navigation-item-wrapper df-aic-jcc">
                                            <div data-v-513d1bb8="" className="item-text-block">
                                                <div data-v-513d1bb8="" className="item-text">Главная</div>
                                                <div data-v-513d1bb8="" className="item-text-active">Главная</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a data-v-513d1bb8="" href="/bets/live" className="navigation-item df-aic-jcc">
                                        <div data-v-513d1bb8="" className="navigation-item-wrapper df-aic-jcc">
                                            <div data-v-513d1bb8="" className="item-text-block">
                                                <div data-v-513d1bb8="" className="item-text">Live</div>
                                                <div data-v-513d1bb8="" className="item-text-active">Live</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a data-v-513d1bb8="" href="/bets/prematch" className="navigation-item df-aic-jcc">
                                        <div data-v-513d1bb8="" className="navigation-item-wrapper df-aic-jcc">
                                            <div data-v-513d1bb8="" className="item-text-block">
                                                <div data-v-513d1bb8="" className="item-text">Линия</div>
                                                <div data-v-513d1bb8="" className="item-text-active">Линия</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a data-v-513d1bb8="" href="/casino" className="active navigation-item df-aic-jcc">
                                        <div data-v-513d1bb8="" className="navigation-item-wrapper df-aic-jcc">
                                            <div data-v-513d1bb8="" className="item-text-block">
                                                <div data-v-513d1bb8="" className="item-text">Казино</div>
                                                <div data-v-513d1bb8="" className="item-text-active">Казино</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a data-v-513d1bb8="" href="/casino/list/3" className="navigation-item df-aic-jcc">
                                        <div data-v-513d1bb8="" className="navigation-item-wrapper df-aic-jcc">
                                            <div data-v-513d1bb8="" className="item-text-block">
                                                <div data-v-513d1bb8="" className="item-text">Live games</div>
                                                <div data-v-513d1bb8="" className="item-text-active">Live games</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a data-v-513d1bb8="" href="/casino/play/1play_1play_luckyjet" className="navigation-item df-aic-jcc is-active">
                                        <div data-v-513d1bb8="" className="navigation-item-wrapper df-aic-jcc">
                                            <img data-v-513d1bb8="" className="navigation-item-image" src="https://v1.bundlecdn.com/img/lucky-jet.f927485da.svg" height="15" width="58" />
                                        </div>
                                    </a>
                                    <a data-v-513d1bb8="" href="/casino/play/1play_1play_speed-n-cash" className="navigation-item df-aic-jcc">
                                        <div data-v-513d1bb8="" className="navigation-item-wrapper df-aic-jcc">
                                            <img data-v-513d1bb8="" className="navigation-item-image" src="https://v1.bundlecdn.com/img/speed-and-cash.dffacd6c5.svg" height="15" width="51" />
                                        </div>
                                    </a>
                                    <a data-v-513d1bb8="" href="/casino/play/aviator" className="navigation-item df-aic-jcc">
                                        <div data-v-513d1bb8="" className="navigation-item-wrapper df-aic-jcc">
                                            <img data-v-513d1bb8="" className="navigation-item-image" src="https://v1.bundlecdn.com/img/aviator-game-logo.2fb50dc03.svg" height="15" width="60" />
                                        </div>
                                    </a>
                                    <a data-v-513d1bb8="" href="/casino/play/softswiss_smartsoft%3AJetX_1Win" className="navigation-item df-aic-jcc">
                                        <div data-v-513d1bb8="" className="navigation-item-wrapper df-aic-jcc">
                                            <img data-v-513d1bb8="" className="navigation-item-image" src="https://v1.bundlecdn.com/img/jetx.64787fc5c.svg" height="15" width="35" />
                                        </div>
                                    </a>
                                    <a data-v-513d1bb8="" href="/casino/list/14" className="navigation-item df-aic-jcc">
                                        <div data-v-513d1bb8="" className="navigation-item-wrapper df-aic-jcc">
                                            <div data-v-513d1bb8="" className="item-text-block">
                                                <div data-v-513d1bb8="" className="item-text">Быстрые игры</div>
                                                <div data-v-513d1bb8="" className="item-text-active">Быстрые игры</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a data-v-513d1bb8="" href="/poker" className="navigation-item df-aic-jcc">
                                        <div data-v-513d1bb8="" className="navigation-item-wrapper df-aic-jcc">
                                            <div data-v-513d1bb8="" className="item-text-block">
                                                <div data-v-513d1bb8="" className="item-text">Poker</div>
                                                <div data-v-513d1bb8="" className="item-text-active">Poker</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a data-v-513d1bb8="" href="/casino/list/13" className="navigation-item df-aic-jcc">
                                        <div data-v-513d1bb8="" className="navigation-item-wrapper df-aic-jcc">
                                            <div data-v-513d1bb8="" className="item-text-block">
                                                <div data-v-513d1bb8="" className="item-text">Vsport</div>
                                                <div data-v-513d1bb8="" className="item-text-active">Vsport</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a data-v-513d1bb8="" href="/bets/cybersport" className="navigation-item df-aic-jcc">
                                        <div data-v-513d1bb8="" className="navigation-item-wrapper df-aic-jcc">
                                            <div data-v-513d1bb8="" className="item-text-block">
                                                <div data-v-513d1bb8="" className="item-text">Cybersport</div>
                                                <div data-v-513d1bb8="" className="item-text-active">Cybersport</div>
                                            </div>
                                        </div>
                                    </a>

                                    <div data-v-513d1bb8="" className="more-item df-aic-jcc">
                                        <div data-v-4dc26244="" data-v-513d1bb8="" className="dropdown align-center item-text-block">
                                            <div data-v-4dc26244="" className="dropdown-trigger">
                                                <div data-v-513d1bb8="" className="more-item-trigger-wrapper">
                                                    <div data-v-513d1bb8="" className="more-item-trigger">
                                                        <div data-v-513d1bb8="" className="item-text">Ещё</div>
                                                        <svg data-v-513d1bb8="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" aria-hidden="true" role="img" className="icon icon-dots sm more-item-icon more-item-icon"><path fill="currentColor" d="M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <div className="FluidCoverWrapper_cover_GbYY4" >
                                <div data-v-5bf5e3a4="" className="NavigationItemCoverLine_cover_IJ4Is">
                                    <div className="NavigationItemCoverLine_line_uWXLC"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-v-5bf5e3a4="" className="level-item">
                        {!isLoggedIn ?
                            <div data-v-d5b8ab5e="" data-v-5bf5e3a4="" className="header-auth">
                                <div data-v-d5b8ab5e="" className="header-auth__item">
                                    <button data-v-bd746ee2="" data-v-d5b8ab5e="" className="button df-aic-jcc secondary theme-default header-button login" type="button" data-pw="HEADER-AUTH-BUTTON"><span data-v-d5b8ab5e="">Вход</span></button>
                                </div>
                                <div data-v-d5b8ab5e="" className="header-auth__item">
                                    <button data-v-bd746ee2="" data-v-d5b8ab5e="" className="button df-aic-jcc green theme-default header-button" type="button">
                                        <span data-v-bd746ee2="" className="icon-wrap">
                                            <svg data-v-bd746ee2="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true" role="img" className="icon icon-plus sm inline"><path d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></svg></span><span data-v-d5b8ab5e="">Регистрация
                                        </span>
                                    </button>
                                </div>
                            </div>
                            :
                            <div data-v-5bf5e3a4="" className="HeaderUserMenu_root_qLsrQ">
                                <div className="HeaderUserMenu_balance_tlt5D">
                                    <div className="Tooltip_root_sF__N">
                                        <div className="HeaderBalance_root_iPUwa">
                                            <div className="HeaderBalance_wrapper_b40Mz">
                                                <div className="HeaderBalance_content_vcCP3">
                                                    <div className="HeaderBalance_info_PbAHB">
                                                        <div className="HeaderBalanceInfo_root_LYN5f">
                                                            <div className="HeaderBalanceInfo_top_pnHwQ">
                                                                <div className="HeaderBalanceInfo_content_Fb3qB">
                                                                    <div className="HeaderBalanceInfo_name_u2NJV">RUB</div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" className="IconBase_xs_OQ8sI IconBase_root_U5LTW HeaderBalanceInfo_icon_tlDvI" width="12" height="12">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.726 6.614a.953.953 0 000-1.337.928.928 0 00-1.252-.065l-.07.065L8 8.717l-3.403-3.44a.928.928 0 00-1.252-.065l-.071.065a.953.953 0 00-.064 1.265l.064.072 4.065 4.11a.928.928 0 001.251.064l.071-.065 4.065-4.109z"></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div className="HeaderBalanceInfo_balance_Gw9TU">{formatNumber(moneyData)}</div>
                                                        </div>
                                                    </div>
                                                    <div className="HeaderBalance_buttonWrapper_lzaty">
                                                        <button className="Button_root_eTUot Button_sizeM_xCyX5 Button_variantPrimary_AfpyD DepositButton_root_eVmDd">
                                                            <span className="Button_content_mQ3xx">
                                                                <div className="DepositButton_hide_uoOq1">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" className="IconBase_m_Qax_Y IconBase_root_U5LTW DepositButton_icon_XcPw7" width="20" height="20"><path d="M9.38 8.708v1.103a2.76 2.76 0 002.758 2.759h2.207v.552a1.66 1.66 0 01-1.655 1.655H3.31A3.31 3.31 0 010 11.467V7.053a3.31 3.31 0 013.31-3.31h9.38c.91 0 1.655.739 1.655 1.655v.551h-2.207a2.76 2.76 0 00-2.759 2.759zm6.62 0v1.103a1.66 1.66 0 01-1.655 1.656h-2.207a1.66 1.66 0 01-1.655-1.656V8.708c0-.916.745-1.655 1.655-1.655h2.207c.42 0 .81.16 1.103.425.337.298.552.739.552 1.23zm-2.758.552a.553.553 0 00-.552-.552.553.553 0 00-.552.552c0 .303.248.551.552.551a.553.553 0 00.552-.551zm-1.87-7.735A1.67 1.67 0 0010.465.47a1.675 1.675 0 00-1.39.005L4.447 2.64h7.244l-.32-1.114z"></path></svg>
                                                                </div>
                                                                <span className="DepositButton_text_qLDEY">Пополнить</span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="HeaderUserMenu_buttons_g4hCM">
                                    <div data-v-4dc26244="" data-v-6d585d94="" className="dropdown align-center user-menu">
                                        <div data-v-4dc26244="" className="dropdown-trigger">
                                            <div data-v-6d585d94="" className="user-menu__avatar">
                                                <div data-v-6d585d94="" className="user-menu__avatar-background"></div>
                                                <div data-v-6d585d94="" className="HeaderUserAvatar_root_e75WO">
                                                    <div className="HeaderUserAvatar_imageContainer_aY2X9">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14" aria-hidden="true" role="img" className="icon icon-profile sm"><path fill="#FFF" fill-rule="evenodd" d="M9.808 10.007L7.523 8.893a.614.614 0 01-.35-.552v-.789a5.261 5.261 0 00.879-1.575.923.923 0 00.557-.844V4.2a.916.916 0 00-.24-.613v-1.24c.014-.129.067-.893-.5-1.523C7.38.277 6.581 0 5.5 0 4.419 0 3.622.277 3.13.824c-.566.63-.513 1.394-.5 1.522v1.241a.918.918 0 00-.239.613v.933c0 .284.133.55.358.726.22.846.678 1.484.838 1.688v.773a.61.61 0 01-.33.54L1.125 9.997A2.096 2.096 0 000 11.844v.756C0 13.707 3.598 14 5.5 14c1.902 0 5.5-.293 5.5-1.4v-.71a2.09 2.09 0 00-1.192-1.883z"></path></svg>
                                                    </div>
                                                </div>
                                                <div data-v-6d585d94="" className="user-menu__toggle">
                                                    <svg data-v-6d585d94="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" aria-hidden="true" role="img" className="icon icon-dots sm user-menu-toggle__icon user-menu-toggle__icon">
                                                        <path fill="currentColor" d="M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopBar;
