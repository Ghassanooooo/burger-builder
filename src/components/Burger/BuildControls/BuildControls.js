import React from 'react'

import classes from './BuildControls.css'

import BuildControl from './BuildControl/BuildControl'

const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'}
]

const buildControls =(props)=>(
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map((i) => (
             <BuildControl key={i.label}
              label={i.label}
              added={()=>props.ingredientAdded(i.type)}
              removed={()=>props.ingredientremoved(i.type)}
              disabled={props.disabled[i.type]}/>
        ))}
    </div>
)

export default buildControls