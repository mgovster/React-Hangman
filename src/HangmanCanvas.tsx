const stickHEAD = (
    <div style={{
        width:"50px",
        height:"50px",
        borderRadius: "100%",
        border:"10px solid black",
        position: "absolute",
        top:"50px",
        right:"-30px"
    }}>
    </div>
)

const stickBODY = (
    <div style={{
        width:"10px",
        height:"100px",
        background:"black",
        position: "absolute",
        top:"120px",
        right:0
    }}>
    </div>
)

const stickRightArm = (
    <div style={{
        width:"100px",
        height:"10px",
        background:"black",
        position: "absolute",
        top:"150px",
        right:"-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom"
    }}>
    </div>
)

const stickLeftArm = (
    <div style={{
        width:"100px",
        height:"10px",
        background:"black",
        position: "absolute",
        top:"150px",
        right:"10px",
        rotate: "30deg",
        transformOrigin: "right bottom"
    }}>
    </div>
)

const stickLeftLeg = (
    <div style={{
        width:"100px",
        height:"10px",
        background:"black",
        position: "absolute",
        top:"210px",
        right:0,
        rotate: "-60deg",
        transformOrigin: "right bottom"
    }}>
    </div>
)

const stickRightLeg = (
    <div style={{
        width:"100px",
        height:"10px",
        background:"black",
        position: "absolute",
        top:"210px",
        right:"-90px",
        rotate: "60deg",
        transformOrigin: "left bottom"
    }}>
    </div>
)

const BODY_PARTS = [stickHEAD, stickBODY, stickLeftArm, stickRightArm, stickLeftLeg, stickRightLeg]

type HangmanCanvasProps ={
    numberOfGuesses: number
}

export function HangmanCanvas({numberOfGuesses} 
    : HangmanCanvasProps){
    return (
    
    <div style={{position: "relative"}}>
        {BODY_PARTS.slice(0,numberOfGuesses)}
        <div style={{height:"50px", width:"10px", background:"black", position:"absolute", top:0,right:0}}></div>
        <div style={{height:"10px", width:"200px", background:"black",marginLeft:"100px"}}></div>
        <div style={{height:"400px", width:"10px", background:"black",marginLeft:"100px"}}></div>
        <div style={{height: "10px", width:"250px", background:"black"}}></div>
    </div>
    
    )
}