import React from 'react'
import reaction from "../../assets/images/icon-reaction.svg"
import memory from "../../assets/images/icon-memory.svg"
import verbal from "../../assets/images/icon-verbal.svg"
import visual from "../../assets/images/icon-visual.svg"


export default function Results() {
    const data = [
        {
          category: "Reaction",
          score: 80,
          icon: reaction,
        },
        {
          category: "Memory",
          score: 92,
          icon: memory
        },
        {
          category: "Verbal",
          score: 61,
          icon: verbal
        },
        {
          category: "Visual",
          score: 72,
          icon: visual
        }
      ]

    return (
        <div className="container">
            <div className="page">
                <div className="img">
                    <h1>Your Result</h1>
                    <div className="progress">
                        <div className="circle"></div>
                        <div className="number">
                            <div>
                                <h1>76</h1>
                                <p>of 100</p>
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <h2>Great</h2>
                        <p>You scored higher than 65% of the people who have taken these tests.</p>
                    </div>
                </div>

                <div className="data-container">
                    <h2>Summary</h2>
                    <div className="data">
                        {data.map(({ icon, category, score }) => (
                            <div key={score} className="stat">
                                <div className="icon_category">
                                    <img src={icon} alt="Icon" />
                                    <p>{category}</p>
                                </div>
                                <p className="score">{score} <span>/ 100</span></p>
                            </div>
                        ))}
                    </div>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}
