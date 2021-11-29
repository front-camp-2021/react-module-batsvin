import React from "react";
import styles from './card.scss'
import { ReactComponent as ReactStar } from '../../img/star.svg';
import { ReactComponent as ReactCart } from '../../img/cart.svg';
import { ReactComponent as ReactWishlist } from '../../img/heart-wishlist.svg';

const Card = ({ device }) => {
   return (
      <div className="card-background">
         <section className="card">
            <div className="card__img">
               <div className="card__img-padding"><img src={device.images[0]} alt={device.brand}></img></div>
            </div>
            <header className="card__header">
               <button className="card__rating">{device.rating}<ReactStar /></button>
               <div className="card__price">{device.price}$</div>
            </header>
            <article className="card__text">
               <h3>{device.title}</h3>
            </article>
            <footer className="card__footer">
               <button className="card__wishlists">
                  <ReactWishlist /> WISHLIST</button>
               <button className="card__cart">
                  <ReactCart /> ADD TO</button>
            </footer>
         </section>
      </div>
   );
}

export default Card;
