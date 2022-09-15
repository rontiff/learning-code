
function clearBCO(type,obj){
    var ev = window.event;
    var el = ev.target || ev.srcElement;
    var vp = { x: ev.pageX, y: ev.pageY };
    var g = YZSoft.forms.field.GridBase.hitTestGrid(vp);
    var bi = -1;
    if (g)
        bi = YZSoft.forms.field.GridBase.hitTestBlock(g, vp.y);

    var table = agent.findGridFromTableName(obj, 'UST_URAO_Declaration_Of_Interest');

    var optOutComment="";
    var notInvolved="";

    if (typeof(table) != "undefined") {

            var eles = table.Blocks[bi].Eles;
            
                for (var j = 0; j < eles.length; j++) {
                    var ele = eles[j];

                    if(ele.dom.id == "XTextBox10") {
                        optOutComment = j;
                    }
                    if(ele.dom.id == "XTextBox9") {
                        notInvolved = j;
                    }
                }


                if(type=="2"){
                    agent.tryGetChechedEle(eles[optoutComment].dom).setValue();
                    agent.tryGetChechedEle(eles[notInvolved].dom).setValue();
                }
    }

}

