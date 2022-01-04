import {useContext, useState, useEffect} from "react";
import { GlobalContext } from '../../context/GlobalContext';
import "../HerosStats/herostats.css"



const HerosStats = () => {

    const {selectedHeros} = useContext(GlobalContext);

    const [combatPowerstat, setCombatPowerstat] = useState([]);
    const [durabilityPowerstat, setDurabilityPowerstat] = useState([]);
    const [intelligencePowerstat, setIntelligencePowerstat] = useState([]);
    const [powerPowerstat, setPowerPowerstat] = useState([]);
    const [speedPowerstat, setSpeedPowerstat] = useState([]);
    const [strengthPowerstat, setStrengthPowerstat] = useState([]);
    const [height, setHeight] = useState([]);
    const [weight, setWeight] = useState([]);

    //console.log(combatPowerstat, durabilityPowerstat, intelligencePowerstat, powerPowerstat, speedPowerstat, strengthPowerstat);
   
    useEffect(() => {
        setCombatPowerstat(selectedHeros.map(combatPowerstat => Number(combatPowerstat.powerstats.combat)));
        setDurabilityPowerstat(selectedHeros.map(durabilityPowerstat => Number(durabilityPowerstat.powerstats.durability)));
        setIntelligencePowerstat(selectedHeros.map(intelligencePowerstat => Number(intelligencePowerstat.powerstats.intelligence)));
        setPowerPowerstat(selectedHeros.map(powerPowerstat => Number(powerPowerstat.powerstats.power)));
        setSpeedPowerstat(selectedHeros.map(speedPowerstat => Number(speedPowerstat.powerstats.speed)));
        setStrengthPowerstat(selectedHeros.map(strengthPowerstat => Number(strengthPowerstat.powerstats.strength)));
        setHeight(selectedHeros.map(hero => parseInt(hero.appearance.height[1])));
        setWeight(selectedHeros.map(hero => parseInt(hero.appearance.weight[1])));
    }, [selectedHeros])
    
 

    var totalCombatPowerstat = combatPowerstat.reduce((counter, total) => counter + total, 0);
    var totalDurabilityPowerstat = durabilityPowerstat.reduce((counter, total) => counter + total, 0);
    var totalIntelligencePowerstat = intelligencePowerstat.reduce((counter, total) => counter + total, 0);
    var totalPowerPowerstat = powerPowerstat.reduce((counter, total) => counter + total, 0);
    var totalSpeedPowerstat = speedPowerstat.reduce((counter, total) => counter + total, 0);
    var totalStrengthPowerstat = strengthPowerstat.reduce((counter, total) => counter + total, 0);
    var totalHeight = height.reduce((counter, total) => counter + total, 0);
    var totalWeight = weight.reduce((counter, total) => counter + total, 0);


    var averageDecimalHeight = totalHeight / height.length;
    var averageDecimalWeight = totalWeight / weight.length;
    var averageHeight = Math.trunc(averageDecimalHeight);
    var averageWeight = Math.trunc(averageDecimalWeight);

    var totalPowerstats = Math.max(totalCombatPowerstat, totalDurabilityPowerstat, totalIntelligencePowerstat, totalPowerPowerstat, totalSpeedPowerstat, totalStrengthPowerstat )
    
    var teamCategory = totalCombatPowerstat === totalPowerstats ? "Combat":
                    totalDurabilityPowerstat === totalPowerstats ? "Durability":
                    totalIntelligencePowerstat === totalPowerstats ? "Intelligence":
                    totalPowerPowerstat === totalPowerstats ? "Power":
                    totalSpeedPowerstat === totalPowerstats ? "Speed":
                    totalStrengthPowerstat === totalPowerstats ? "Strength" : null;
                    

    return (
        <div className="stats">
            <h3>Team Category: {teamCategory} </h3>
            <h5>Combat Powerstats: {totalCombatPowerstat} </h5>
            <h5>Durability Powerstats: {totalDurabilityPowerstat} </h5>
            <h5>Intelligence Powerstats: {totalIntelligencePowerstat} </h5>
            <h5>Power Powerstats: {totalPowerPowerstat} </h5>
            <h5>Speed Powerstats: {totalSpeedPowerstat} </h5>
            <h5>Strength Powerstats: {totalStrengthPowerstat} </h5>
            <h6>Average Height : {averageHeight} cms</h6>
            <h6>Average Weight : {averageWeight} kg</h6>
        </div>
    )
}




export default HerosStats;