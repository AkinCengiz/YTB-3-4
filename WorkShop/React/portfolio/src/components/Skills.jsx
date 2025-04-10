import React from 'react'
import Skill from './Skill'

function Skills({skills}) {
  
  return (
    <>
    <h4>Technical Skills</h4>
            {/* Progress bars / Skills */}
            {
              skills.map((skill,index) => (
                <Skill skill={skill} key={index}/>

              ))
            }
    </>
  )
}

export default Skills