/**
 * Created by Denis on 05.04.2017.
 */
export default class ObjPerson {
    constructor(m_anim, obj) {
        this.obj = obj;
        this.m_anim = m_anim;
        //console.warn(this.m_anim.get_anim_names(obj));
        this._renderOnStart();
    }

    _renderOnStart() {
        this.m_anim.stop(this.obj);
    }

    play(obj){
        return new Promise((resolve)=>{
            let sum = 0;
            let command = '';
            switch (obj.action){
                case 'hit':{
                    command+='Attack';
                    break;
                }
                case 'block':{
                    command+='Block';
                    break;
                }
                default: {
                    sum++;
                    break;
                }
            }
            switch (obj.method){
                case 'arm':{
                    command+='_Arm';
                    break;
                }
                case 'leg':{
                    command+='_Leg';
                    break;
                }
                case 'head':{
                    command+='_Head';
                    break;
                }
                default: {
                    sum++;
                }
            }
            switch (obj.target){
                case 'body':{
                    command+='_Body';
                    break;
                }
                case 'head':{
                    command+='_Head';
                    break;
                }
                default:{
                    sum++;
                }
            }
            switch (obj.result){
                case true:{
                    command+='_Success';
                    break;
                }
                case false:{
                    command+='_Fail';
                    break;
                }
                default: {
                    sum++;
                }
            }
            //console.warn(`SUM=${sum}`);
            if(sum>0){
                this.m_anim.stop(this.obj);
                resolve();
            } else {
                this.m_anim.apply(this.obj, command);
                this.m_anim.play(this.obj, () => {
                    resolve();
                });
            }
        });
    }
}