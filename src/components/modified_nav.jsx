import {useState} from "react";

export const Modified_nav = (props) => {
    return (
        <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
            <div className='container'>
                <div className='navbar-header'>
                    <button
                        type='button'
                        className='navbar-toggle collapsed'
                        data-toggle='collapse'
                        data-target='#bs-example-navbar-collapse-1'
                    >
                        {' '}
                        <span className='sr-only'>Toggle navigation</span>{' '}
                        <span className='icon-bar'></span>{' '}
                        <span className='icon-bar'></span>{' '}
                        <span className='icon-bar'></span>{' '}
                    </button>
                    <a className='navbar-brand' href='#page-top'>
                        <img style={{marginTop: -10}} src='img/logo.png'  alt={''}/>
                    </a>
                </div>

                <div
                    className='navbar-expand-sm navbar-collapse'
                    id='bs-example-navbar-collapse-1'
                >
                    <ul className='nav navbar-nav navbar-right'>
                        <li>
                            <a href='#features'>
                                Features
                            </a>
                        </li>
                        <li>
                            <a href='#about'>
                                Biz Kimiz?
                            </a>
                        </li>
                        <li>
                            <a href='#team'>
                                Hekimlerimiz
                            </a>
                        </li>
                        <li>
                            <a href='#services'>
                                Tedaviler
                            </a>
                        </li>
                        <li>
                            <a href='#portfolio'>
                                Gallery
                            </a>
                        </li>
                        <li>
                            <a href='#portfolio'>
                                İletişim
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
