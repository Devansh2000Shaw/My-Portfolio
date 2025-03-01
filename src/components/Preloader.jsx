import React from 'react';
import '../assets/css/Preloader.css';

export default function Preloader() {
    return (
        <div>
            <div id="preloader-active">
                <div class="preloader d-flex align-items-center justify-content-center">
                    <div class="preloader-inner position-relative">
                        <div class="preloader-circle"></div>
                            <div class="preloader-img pere-text">
                                <img src="assets/img/logo/Logo1.png" alt=""/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
