import React from 'react'
import '../css/Landing.css'

const Landing = () => {
    return (
        <div className='wholeLanding'>
            <div className="header">
                Diversión, cervezas y amigos <br /> ...al azar!!!.
            </div>
            <div className='descriptionContent m-2'>
                <h2 >Bar Roulette </h2>
                <p>Sal con tus amigos con una propuesta diferente.<br />
                    Elije la cantidad de personas que serán.<br />
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
                <button type="button" class="btn btn-danger">Jugar</button>
            </div>

        </div>
    )
}

export default Landing