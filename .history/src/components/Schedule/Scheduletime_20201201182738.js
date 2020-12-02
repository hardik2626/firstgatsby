import React from 'react'
import {graphql,Link,StaticQuery} from 'gatsby'

const Scheduletime = () => (
    
  <StaticQuery
    query={graphql`
      {
        allWordpressWpSchedule(sort: {fields: id, order: ASC}) {
            edges {
            node {
                title
                    acf {
                    event_schedule {
                        schedule_title
                        schedule_time
                    }
                    }
                categories {
                    name
                    slug
                    link
                }
            }
            }
        }
      }
    `}


    render={props => (
      <>
        

        <section className="schedule-table-section spad">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="schedule-table-tab">
                    <ul className="nav nav-tabs" role="tablist">
                        {props.allWordpressWpSchedule.edges.map((ttttt) => (
                            <li className="nav-item" key={ttttt.node.categories.slug}>
                                <Link to={`/${ttttt.node.categories.slug}`} className="nav-link" activeclassName='active' data-toggle="tab" href="#tabs-1" role="tab">
                                    {ttttt.node.categories.name}
                                </Link>
                            </li>
                        ))}
                        
                    </ul>
                    
                    
          {props.allWordpressWpSchedule.edges.map(items => (
                    
                    
                    <div className="tab-content">
                        <div className="tab-pane active" id="tabs-1" role="tabpanel">
                            <div className="schedule-table-content">
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>
                                                <strong>{items.node.title}</strong>
                                                {/* <span>{items.node.acf.event_schedule.schedule_time}</span> */}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {props.allWordpressWpSchedule.edges.map(ddd => (
                                        <tr>
                                            <td className="event-time">{ddd.acf.event_schedule.schedule_time}</td>
                                            <td className="break hover-bg"><h5>{ddd.node.acf.event_schedule.schedule_time}</h5></td>
                                        </tr>
                                    ))}
                                        {/* <tr>
                                            <td className="event-time">{items.node.acf.marketing_time}</td>
                                                <td className="hover-bg">
                                                    <h5>{items.node.acf.marketers_name.market_name}</h5>
                                                    <p><span>By</span> {items.node.acf.marketers_name.market_text}</p>
                                                </td>
                                        </tr>
                                        <tr>
                                            <td className="event-time">{items.node.acf.technology_time}</td>
                                                <td className="hover-bg">
                                                    <h5>{items.node.acf.techno_field.tech_name}</h5>
                                                    <p><span>By</span> {items.node.acf.techno_field.tech_time}</p>
                                                </td>
                                        </tr>
                                        <tr>
                                            <td className="event-time">{items.node.acf.talk_time}</td>
                                                <td className="hover-bg">
                                                    <h5>{items.node.acf.talking_life.talking_life_name}</h5>
                                                    <p><span>By</span> {items.node.acf.talking_life.talking_life_text}</p>
                                                </td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


            ))}


                </div>
            </div>
        </div>
    </div>
</section>
        
                
      </>
    )}
  />
)
export default Scheduletime