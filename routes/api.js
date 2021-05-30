import express from 'express';
import {ScoreModel} from '../model/score';
import {createScore, getScore, setScore} from '../controller/score';

const Router = express.Router();

Router.get('/score', async (req, res) => {
    // 어떤 area인지 parameter에서 담아서 처리
    try {
        console.log("before db")
        const score = await getScore(0);
        console.log("after db")
        if(typeof score === 'number') {
            return res.status(200).json({score: score});
        }
        else {
            // error reason 처리 필요, setScore에서 reason을 돌려줄 것
            return res.status(400).json({success: false, reason: "unknown"});
        }
    } catch(err) {
        res.status(500).json({success: false, reason: err});
    }
});

Router.post('/score', async(req, res) => {
    console.log("@");
    // const at = await ScoreModel.create({area: '1'});
    // const ask = await createScore('1');
    // console.log(at)
    return res.status(200).send("1");
})

// put의 경우 대상이 static하게 정해져 있을 때 변경하는 경우
// post의 경우 대상이 static하게 정해져 있지 않거나 추가하는 경우
Router.put('/score', async (req, res) => {
    // 어떤 area인지 parameter에서 담아서 처리
    try {
        const ask = await setScore(0, 1, 0);
        if(ask === true) {
            return res.status(200).json({success: true});
        }
        else {
            // error reason 처리 필요, setScore에서 reason을 돌려줄 것
            return res.status(400).json({success: false, reason: "unknown"});
        }
    } catch(err) {
        return res.status(500).json({success: false, reason: err});
    }
});

module.exports = Router;
