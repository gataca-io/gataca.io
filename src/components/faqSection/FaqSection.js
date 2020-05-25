import faqStyles from "./faqSection.module.scss"
import React from "react"
import { Accordion, AccordionItem } from "carbon-components-react"

export default function FaqSection(props) {
  return (
    <section className={faqStyles.base}>
      <div className={faqStyles.container}>
        <div className={faqStyles.intro}>
          <img src={props.data.icon}/>
          <h2>{props.data.title}</h2>
        </div>
        
        <Accordion align="end">
          {props.data.questions.map(question => {
            return (
              <AccordionItem
                onClick={function noRefCheck() {
                }}
                onHeadingClick={function noRefCheck() {
                }}
                title={question.title}
              >
                <p dangerouslySetInnerHTML={{ __html: question.response }}/>
              </AccordionItem>
            )
          })}
        </Accordion>
        
      </div>
    </section>
  )
}
