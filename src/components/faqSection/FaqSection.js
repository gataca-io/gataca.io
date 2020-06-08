import faqStyles from "./faqSection.module.scss"
import React from "react"
import { Accordion, AccordionItem } from "carbon-components-react"

export default function FaqSection({ data }) {
  return (
    <section className={faqStyles.base}>
      <div className={faqStyles.container}>
        <div className={faqStyles.intro}>
          <img src={data.icon} alt={data.title}/>
          <h2>{data.title}</h2>
        </div>
        
        <Accordion align="end">
          {data.questions.map(question => {
            return (
              <AccordionItem
                onClick={function noRefCheck() {
                }}
                onHeadingClick={function noRefCheck() {
                }}
                title={question.title}
              >
                <div dangerouslySetInnerHTML={{ __html: question.response }}/>
              </AccordionItem>
            )
          })}
        </Accordion>
        
      </div>
    </section>
  )
}
