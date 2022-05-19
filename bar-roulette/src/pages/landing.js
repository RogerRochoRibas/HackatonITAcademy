import React from 'react'
import ProfileTeam from '../components/landing/ProfileTeam'
import '../css/Landing.css'
import dizzy from '../img/dizzy.jpg'
import roger from '../img/roger.jpg'
import paulo from '../img/paulo.jpeg'
import inaki from '../img/inaki.png'

export const Landing = () => {

    const barrios = [
        {
            nombre: 'Eixample'
            , foto: 'https://media.timeout.com/images/105657526/750/422/image.jpg'
        },
        {
            nombre: 'Gracia',
            foto: 'https://www.barcelonacheckin.com/img/stored_images/barcelona/articles_images/Gracia.jpg'
        },
        {
            nombre: 'Gotico',
            foto: 'https://www.laramblabarcelona.com/wp-content/uploads/2018/02/barrio-gotico-curiosidads-portada-1368x800.jpg'
        },
        {
            nombre: 'Born',
            foto: 'https://s3.eu-west-1.amazonaws.com/pro.static.portalstdo.tmb.cat/styles/galeria_slider/s3/2018-03/REF_EL_BORN_CT6A5286-web_0.jpg?itok=j8PCY-VG'
        },
        {
            nombre: 'Barceloneta',
            foto: 'https://offloadmedia.feverup.com/barcelonasecreta.com/wp-content/uploads/2021/02/02122918/barceloneta-1024x597.jpg'
        },
        {
            nombre: 'Poblenou',
            foto: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/16/5b/fa/el-poble-nou.jpg?w=1200&h=-1&s=1'
        },
    ]


    return (
        <div className='wholeLanding'>
            <div className="header">
                Diversión, cervezas y amigos <br /> ...al azar!!!.
            </div>
            <div className='descriptionContent m-2'>
                {/* <h1 >Bar Roulette </h1> */}
                <p> Elige la cantidad de personas que serán.<br />
                    Nuestro sistema aleatorio, determinará el barrio,<br />
                    y elegirá solamente entre aquellos bares que tengan<br />
                    capacidad para esa cantidad de personas.<br />
                    Al azar escogerá uno de nuestros bares, y te ofrecerá la posibilidad de invitar a tur amigos.<br />
                    Y sortear quién pagará la primera ronda!!!!
                </p>
            </div>
            <div className='selectorAndButton'>
                <select className="form-select" aria-label="Default select example">
                    <option selected>0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>

                </select>
                <button type="button" class="btn btn-danger ms-2">Jugar</button>
            </div>
            <div className='barriosCards'>
                {
                    barrios.map(barrio => (
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={barrio.foto} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{barrio.nombre}</h5>
                            </div>
                        </div>)
                    )
                }
            </div>

            <h2>Equipo</h2>
            <div className='d-flex justify-content-center m-4'>
                <ProfileTeam name={'Iñaki Sorovigarat'} fotoPerfil={inaki} />
                <ProfileTeam name={'Roger Rocho'} fotoPerfil={roger} />
                <ProfileTeam name={'Paulo Almeida'} fotoPerfil={paulo} />
                <ProfileTeam name={'Lucas Rilho'} fotoPerfil={dizzy} />
                <ProfileTeam name={'Natalia SK'} fotoPerfil={dizzy} />

            </div>

        </div>
    )
}