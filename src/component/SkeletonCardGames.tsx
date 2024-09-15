import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const SkeletonCardGames = () => {
  return (
    <Card width="430px" borderRadius={10} overflow={'hidden'}>
        <Skeleton height="200px"></Skeleton>
        <CardBody>
            <SkeletonText></SkeletonText>
        </CardBody>
    </Card>
  )
}

export default SkeletonCardGames