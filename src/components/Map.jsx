import React from "react";
import "./styles.css";
import MapmyIndia from "mapmyindia-react";

// d13ae3c193ea30b892ebe60ac054a932

export default function Heatmap() {
  return (
    <div>
      <MapmyIndia
      markers={[
        {
          position: [18.5314, 73.845],
          draggable: true,
          title: "Marker title",
          onClick: (e) => {
            console.log("clicked ");
          },
          onDragend: (e) => {
            console.log("dragged");
          }
        }
      ]}
    />
    </div>
    
    
  );
}
