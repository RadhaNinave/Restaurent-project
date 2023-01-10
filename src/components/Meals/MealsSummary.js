import { Fragment } from "react"
import  classes from './MealSummary.module.css';

const MealsSummary = props =>{
    return<section className={classes.summary}>
       
    <h4 >Delicious Food ,Delivered to you</h4>
    <p>Choose Your favorite meals from our broad selection of available meals and Enjoy Lunch and Dinner at Home </p>
    <p> All our meals cooked with high quality ingredients by experienced chef</p>
  
</section>
    

}
export default MealsSummary;