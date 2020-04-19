import Mock from 'mockjs'
import Data from './data'
Mock.mock('/api/index','get',Data.index)