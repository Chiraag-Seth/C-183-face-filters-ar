import React from 'react';
import {Image, View} from 'react-native';

const Filter3 = ({
    faces: {
        bounds: {
            size: {width: facewidth, height: faceheight}
        },
        leftEyePosition,
        rightEyePosition
    }
}) =>{
    const glassesWidth = facewidth
    const glassesHeight = faceheight / 3
    const transformAngle = (
        angleRad = Math.atan(
            (rightEyePosition.y - leftEyePosition.y) / 
            (rightEyePosition.x - leftEyePosition.x)
        )
    ) => angleRad * 180 / Math.PI
    return(
        <View style = {{
            position: 'absolute',
            left: leftEyePosition.x - glassesWidth * 0.675,
            top: leftEyePosition.y - glassesHeight * 0.5
        }}
        > 
        <Image 
        source = {require("./assets/Frapp-02.png")}
        style = {{
            width: glassesWidth,
            height: glassesHeight,
            researchMode: 'contain',
            transform: [{rotate: `${transformAngle()}deg`}]
        }}
        />
         </View>
    );
};
export default Filter3