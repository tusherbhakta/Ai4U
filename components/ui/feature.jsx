import { features } from '@/data/features'
import React from 'react'
import { Card, CardContent } from './card'

const Feature = () => {
    return (
        <section>
            <div>
                <h2>Powerful Features for Your Career Growth</h2>
                <div>{features.map((feature, index) => {
                    return (
                        <Card>
                            <CardContent>
                                <div>{feature.icon}
                                    <h2>{feature.title}</h2>
                                    <p>{feature.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}</div>
            </div>
        </section>
    )
}

export default Feature