import React from 'react'
import {Card,CardBody} from 'reactstrap';
function UserCard({user}) {
    return (
        <Card className="text-center mt-3 mb-4">
            <img src={user.avatar_url} className="img-thumbnail"/>
            <CardBody>
                <div className="text-primary">
                    {user.name}
                    {user.bio}
                </div>
            </CardBody>
        </Card>
    )
}

export default UserCard
