/**
 * Copyright (C) 2010-2015 Graham Breach
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * TagCanvas 2.6.1

 * For more information, please contact <graham@goat1000.com>
 */



/**
 * 지원 브라우저 
 *  => IE 9,10,11/ Chrom / FireFox
 * 
 * 선언
 * < script src = "tagcanvas.min.js" type = "text / javascript" > < / script >
 * IE 9는 js 필요없습니다.
 * */



(function() {
    var L, J, K = Math.abs,
        af = Math.sin,
        w = Math.cos,
        s = Math.max,
        az = Math.min,
        am = Math.ceil,
        D = Math.sqrt,
        ao = Math.pow,
        h = {},
        l = {},
        m = {
            0: "0,",
            1: "17,",
            2: "34,",
            3: "51,",
            4: "68,",
            5: "85,",
            6: "102,",
            7: "119,",
            8: "136,",
            9: "153,",
            a: "170,",
            A: "170,",
            b: "187,",
            B: "187,",
            c: "204,",
            C: "204,",
            d: "221,",
            D: "221,",
            e: "238,",
            E: "238,",
            f: "255,",
            F: "255,"
        },
        x, c, P, aB, G, aC, Z, C = document,
        p, b = {};
    for (L = 0; L < 256; ++L) {
        J = L.toString(16);
        if (L < 16) {
            J = "0" + J
        }
        l[J] = l[J.toUpperCase()] = L.toString() + ","
    }

    function ag(i) {
        return typeof i != "undefined"
    }

    function H(i) {
        return typeof i == "object" && i != null
    }

    function aq(i, j, aD) {
        return isNaN(i) ? aD : az(aD, s(j, i))
    }

    function aw() {
        return false
    }

    function F() {
        return new Date().valueOf()
    }

    function A(aD, aG) {
        var j = [],
            aE = aD.length,
            aF;
        for (aF = 0; aF < aE; ++aF) {
            j.push(aD[aF])
        }
        j.sort(aG);
        return j
    }

    function al(j) {
        var aE = j.length - 1,
            aD, aF;
        while (aE) {
            aF = ~~(Math.random() * aE);
            aD = j[aE];
            j[aE] = j[aF];
            j[aF] = aD;
            --aE
        }
    }

    function ac(i, aD, j) {
        this.x = i;
        this.y = aD;
        this.z = j
    }
    G = ac.prototype;
    G.length = function() {
        return D(this.x * this.x + this.y * this.y + this.z * this.z)
    };
    G.dot = function(i) {
        return this.x * i.x + this.y * i.y + this.z * i.z
    };
    G.cross = function(j) {
        var i = this.y * j.z - this.z * j.y,
            aE = this.z * j.x - this.x * j.z,
            aD = this.x * j.y - this.y * j.x;
        return new ac(i, aE, aD)
    };
    G.angle = function(j) {
        var i = this.dot(j),
            aD;
        if (i == 0) {
            return Math.PI / 2
        }
        aD = i / (this.length() * j.length());
        if (aD >= 1) {
            return 0
        }
        if (aD <= -1) {
            return Math.PI
        }
        return Math.acos(aD)
    };
    G.unit = function() {
        var i = this.length();
        return new ac(this.x / i, this.y / i, this.z / i)
    };

    function ah(aD, j) {
        j = j * Math.PI / 180;
        aD = aD * Math.PI / 180;
        var i = af(aD) * w(j),
            aF = -af(j),
            aE = -w(aD) * w(j);
        return new ac(i, aF, aE)
    }

    function Q(i) {
        this[1] = {
            1: i[0],
            2: i[1],
            3: i[2]
        };
        this[2] = {
            1: i[3],
            2: i[4],
            3: i[5]
        };
        this[3] = {
            1: i[6],
            2: i[7],
            3: i[8]
        }
    }
    aB = Q.prototype;
    Q.Identity = function() {
        return new Q([1, 0, 0, 0, 1, 0, 0, 0, 1])
    };
    Q.Rotation = function(aE, i) {
        var j = af(aE),
            aD = w(aE),
            aF = 1 - aD;
        return new Q([aD + ao(i.x, 2) * aF, i.x * i.y * aF - i.z * j, i.x * i.z * aF + i.y * j, i.y * i.x * aF + i.z * j, aD + ao(i.y, 2) * aF, i.y * i.z * aF - i.x * j, i.z * i.x * aF - i.y * j, i.z * i.y * aF + i.x * j, aD + ao(i.z, 2) * aF])
    };
    aB.mul = function(aD) {
        var aE = [],
            aH, aG, aF = (aD.xform ? 1 : 0);
        for (aH = 1; aH <= 3; ++aH) {
            for (aG = 1; aG <= 3; ++aG) {
                if (aF) {
                    aE.push(this[aH][1] * aD[1][aG] + this[aH][2] * aD[2][aG] + this[aH][3] * aD[3][aG])
                } else {
                    aE.push(this[aH][aG] * aD)
                }
            }
        }
        return new Q(aE)
    };
    aB.xform = function(aD) {
        var j = {},
            i = aD.x,
            aF = aD.y,
            aE = aD.z;
        j.x = i * this[1][1] + aF * this[2][1] + aE * this[3][1];
        j.y = i * this[1][2] + aF * this[2][2] + aE * this[3][2];
        j.z = i * this[1][3] + aF * this[2][3] + aE * this[3][3];
        return j
    };

    function q(aE, aG, aL, aI) {
        var aH, aK, j, aJ, aM = [],
            aF = Math.PI * (3 - D(5)),
            aD = 2 / aE;
        for (aH = 0; aH < aE; ++aH) {
            aK = aH * aD - 1 + (aD / 2);
            j = D(1 - aK * aK);
            aJ = aH * aF;
            aM.push([w(aJ) * j * aG, aK * aL, af(aJ) * j * aI])
        }
        return aM
    }

    function V(aF, aD, aI, aO, aM) {
        var aN, aP = [],
            aG = Math.PI * (3 - D(5)),
            aE = 2 / aF,
            aL, aK, aJ, aH;
        for (aL = 0; aL < aF; ++aL) {
            aK = aL * aE - 1 + (aE / 2);
            aN = aL * aG;
            aJ = w(aN);
            aH = af(aN);
            aP.push(aD ? [aK * aI, aJ * aO, aH * aM] : [aJ * aI, aK * aO, aH * aM])
        }
        return aP
    }

    function M(aD, aE, aH, aN, aL, aJ) {
        var aM, aO = [],
            aF = Math.PI * 2 / aE,
            aK, aI, aG;
        for (aK = 0; aK < aE; ++aK) {
            aM = aK * aF;
            aI = w(aM);
            aG = af(aM);
            aO.push(aD ? [aJ * aH, aI * aN, aG * aL] : [aI * aH, aJ * aN, aG * aL])
        }
        return aO
    }

    function ak(aE, i, j, aD) {
        return V(aE, 0, i, j, aD)
    }

    function ap(aE, i, j, aD) {
        return V(aE, 1, i, j, aD)
    }

    function d(aF, i, j, aD, aE) {
        aE = isNaN(aE) ? 0 : aE * 1;
        return M(0, aF, i, j, aD, aE)
    }

    function n(aF, i, j, aD, aE) {
        aE = isNaN(aE) ? 0 : aE * 1;
        return M(1, aF, i, j, aD, aE)
    }

    function T(aG, i) {
        var aF = aG,
            aE, aD, j = (i * 1).toPrecision(3) + ")";
        if (aG[0] === "#") {
            if (!h[aG]) {
                if (aG.length === 4) {
                    h[aG] = "rgba(" + m[aG[1]] + m[aG[2]] + m[aG[3]]
                } else {
                    h[aG] = "rgba(" + l[aG.substr(1, 2)] + l[aG.substr(3, 2)] + l[aG.substr(5, 2)]
                }
            }
            aF = h[aG] + j
        } else {
            if (aG.substr(0, 4) === "rgb(" || aG.substr(0, 4) === "hsl(") {
                aF = (aG.replace("(", "a(").replace(")", "," + j))
            } else {
                if (aG.substr(0, 5) === "rgba(" || aG.substr(0, 5) === "hsla(") {
                    aE = aG.lastIndexOf(",") + 1, aD = aG.indexOf(")");
                    i *= parseFloat(aG.substring(aE, aD));
                    aF = aG.substr(0, aE) + i.toPrecision(3) + ")"
                }
            }
        }
        return aF
    }

    function O(i, j) {
        if (window.G_vmlCanvasManager) {
            return null
        }
        var aD = C.createElement("canvas");
        aD.width = i;
        aD.height = j;
        return aD
    }

    function aj() {
        var j = O(3, 3),
            aE, aD;
        if (!j) {
            return false
        }
        aE = j.getContext("2d");
        aE.strokeStyle = "#000";
        aE.shadowColor = "#fff";
        aE.shadowBlur = 3;
        aE.globalAlpha = 0;
        aE.strokeRect(2, 2, 2, 2);
        aE.globalAlpha = 1;
        aD = aE.getImageData(2, 2, 1, 1);
        j = null;
        return (aD.data[0] > 0)
    }

    function ai(aH, j, aG, aF) {
        var aE = aH.createLinearGradient(0, 0, j, 0),
            aD;
        for (aD in aF) {
            aE.addColorStop(1 - aD, aF[aD])
        }
        aH.fillStyle = aE;
        aH.fillRect(0, aG, j, 1)
    }

    function k(aF, aD, j) {
        var aE = 1024,
            aJ = 1,
            aI = aF.weightGradient,
            aH, aL, aG, aK;
        if (aF.gCanvas) {
            aL = aF.gCanvas.getContext("2d");
            aJ = aF.gCanvas.height
        } else {
            if (H(aI[0])) {
                aJ = aI.length
            } else {
                aI = [aI]
            }
            aF.gCanvas = aH = O(aE, aJ);
            if (!aH) {
                return null
            }
            aL = aH.getContext("2d");
            for (aG = 0; aG < aJ; ++aG) {
                ai(aL, aE, aG, aI[aG])
            }
        }
        j = s(az(j || 0, aJ - 1), 0);
        aK = aL.getImageData(~~((aE - 1) * aD), j, 1, 1).data;
        return "rgba(" + aK[0] + "," + aK[1] + "," + aK[2] + "," + (aK[3] / 255) + ")"
    }

    function W(aM, aF, j, aQ, aP, aN, aL, aH, aE, aO, aG, aK) {
        var aJ = aP + (aH || 0) + (aE.length && aE[0] < 0 ? K(aE[0]) : 0),
            aD = aN + (aH || 0) + (aE.length && aE[1] < 0 ? K(aE[1]) : 0),
            aI, aR;
        aM.font = aF;
        aM.textBaseline = "top";
        aM.fillStyle = j;
        aL && (aM.shadowColor = aL);
        aH && (aM.shadowBlur = aH);
        aE.length && (aM.shadowOffsetX = aE[0], aM.shadowOffsetY = aE[1]);
        for (aI = 0; aI < aQ.length; ++aI) {
            aR = 0;
            if (aG) {
                if ("right" == aK) {
                    aR = aO - aG[aI]
                } else {
                    if ("centre" == aK) {
                        aR = (aO - aG[aI]) / 2
                    }
                }
            }
            aM.fillText(aQ[aI], aJ + aR, aD);
            aD += parseInt(aF)
        }
    }

    function an(aH, i, aG, j, aE, aF, aD) {
        if (aF) {
            aH.beginPath();
            aH.moveTo(i, aG + aE - aF);
            aH.arcTo(i, aG, i + aF, aG, aF);
            aH.arcTo(i + j, aG, i + j, aG + aF, aF);
            aH.arcTo(i + j, aG + aE, i + j - aF, aG + aE, aF);
            aH.arcTo(i, aG + aE, i, aG + aE - aF, aF);
            aH.closePath();
            aH[aD ? "stroke" : "fill"]()
        } else {
            aH[aD ? "strokeRect" : "fillRect"](i, aG, j, aE)
        }
    }

    function g(aJ, i, aH, aE, aI, aD, aF, aG, j) {
        this.strings = aJ;
        this.font = i;
        this.width = aH;
        this.height = aE;
        this.maxWidth = aI;
        this.stringWidths = aD;
        this.align = aF;
        this.valign = aG;
        this.scale = j
    }
    Z = g.prototype;
    Z.SetImage = function(aG, j, aE, i, aF, aI, aD, aH) {
        this.image = aG;
        this.iwidth = j * this.scale;
        this.iheight = aE * this.scale;
        this.ipos = i;
        this.ipad = aF * this.scale;
        this.iscale = aH;
        this.ialign = aI;
        this.ivalign = aD
    };
    Z.Align = function(j, aD, i) {
        var aE = 0;
        if (i == "right" || i == "bottom") {
            aE = aD - j
        } else {
            if (i != "left" && i != "top") {
                aE = (aD - j) / 2
            }
        }
        return aE
    };
    Z.Create = function(aP, aV, aO, aW, aU, aT, i, aS, aL) {
        var aJ, aH, aQ, a1, aY, aX, aF, aE, aD, j, aI, aG, aK, aR, a0 = K(i[0]),
            aZ = K(i[1]),
            aM, aN;
        aS = s(aS, a0 + aT, aZ + aT);
        aY = 2 * (aS + aW);
        aF = 2 * (aS + aW);
        aH = this.width + aY;
        aQ = this.height + aF;
        aD = j = aS + aW;
        if (this.image) {
            aI = aG = aS + aW;
            aK = this.iwidth;
            aR = this.iheight;
            if (this.ipos == "top" || this.ipos == "bottom") {
                if (aK < this.width) {
                    aI += this.Align(aK, this.width, this.ialign)
                } else {
                    aD += this.Align(this.width, aK, this.align)
                }
                if (this.ipos == "top") {
                    j += aR + this.ipad
                } else {
                    aG += this.height + this.ipad
                }
                aH = s(aH, aK + aY);
                aQ += aR + this.ipad
            } else {
                if (aR < this.height) {
                    aG += this.Align(aR, this.height, this.ivalign)
                } else {
                    j += this.Align(this.height, aR, this.valign)
                }
                if (this.ipos == "right") {
                    aI += this.width + this.ipad
                } else {
                    aD += aK + this.ipad
                }
                aH += aK + this.ipad;
                aQ = s(aQ, aR + aF)
            }
        }
        aJ = O(aH, aQ);
        if (!aJ) {
            return null
        }
        aY = aF = aW / 2;
        aX = aH - aW;
        aE = aQ - aW;
        a1 = aJ.getContext("2d");
        if (aV) {
            a1.fillStyle = aV;
            an(a1, aY, aF, aX, aE, aL)
        }
        if (aW) {
            a1.strokeStyle = aO;
            a1.lineWidth = aW;
            an(a1, aY, aF, aX, aE, aL, true)
        }
        if (aT || a0 || aZ) {
            aM = O(aH, aQ);
            if (aM) {
                aN = a1;
                a1 = aM.getContext("2d")
            }
        }
        W(a1, this.font, aP, this.strings, aD, j, 0, 0, [], this.maxWidth, this.stringWidths, this.align);
        if (this.image) {
            a1.drawImage(this.image, aI, aG, aK, aR)
        }
        if (aN) {
            a1 = aN;
            aU && (a1.shadowColor = aU);
            aT && (a1.shadowBlur = aT);
            a1.shadowOffsetX = i[0];
            a1.shadowOffsetY = i[1];
            a1.drawImage(aM, 0, 0)
        }
        return aJ
    };

    function v(aE, j, aF) {
        var aD = O(j, aF),
            aG;
        if (!aD) {
            return null
        }
        aG = aD.getContext("2d");
        aG.drawImage(aE, (j - aE.width) / 2, (aF - aE.height) / 2);
        return aD
    }

    function at(aE, j, aF) {
        var aD = O(j, aF),
            aG;
        if (!aD) {
            return null
        }
        aG = aD.getContext("2d");
        aG.drawImage(aE, 0, 0, j, aF);
        return aD
    }

    function ay(aP, aK, aQ, aU, aL, aJ, aI, aN, aG, aH) {
        var aE = aK + ((2 * aN) + aJ) * aU,
            aM = aQ + ((2 * aN) + aJ) * aU,
            aF = O(aE, aM),
            aT, aS, aD, aR, j, aV, aO;
        if (!aF) {
            return null
        }
        aJ *= aU;
        aG *= aU;
        aS = aD = aJ / 2;
        aR = aE - aJ;
        j = aM - aJ;
        aN = (aN * aU) + aS;
        aT = aF.getContext("2d");
        if (aL) {
            aT.fillStyle = aL;
            an(aT, aS, aD, aR, j, aG)
        }
        if (aJ) {
            aT.strokeStyle = aI;
            aT.lineWidth = aJ;
            an(aT, aS, aD, aR, j, aG, true)
        }
        if (aH) {
            aV = O(aE, aM);
            aO = aV.getContext("2d");
            aO.drawImage(aP, aN, aN, aK, aQ);
            aO.globalCompositeOperation = "source-in";
            aO.fillStyle = aI;
            aO.fillRect(0, 0, aE, aM);
            aO.globalCompositeOperation = "destination-over";
            aO.drawImage(aF, 0, 0);
            aO.globalCompositeOperation = "source-over";
            aT.drawImage(aV, 0, 0)
        } else {
            aT.drawImage(aP, aN, aN, aP.width, aP.height)
        }
        return {
            image: aF,
            width: aE / aU,
            height: aM / aU
        }
    }

    function Y(aJ, aP, aL, aF, aN, aO, aE) {
        var aQ = K(aE[0]),
            aK = K(aE[1]),
            aG = aP + (aQ > aO ? aQ + aO : aO * 2) * aF,
            j = aL + (aK > aO ? aK + aO : aO * 2) * aF,
            aI = aF * ((aO || 0) + (aE[0] < 0 ? aQ : 0)),
            aD = aF * ((aO || 0) + (aE[1] < 0 ? aK : 0)),
            aH, aM;
        aH = O(aG, j);
        if (!aH) {
            return null
        }
        aM = aH.getContext("2d");
        aN && (aM.shadowColor = aN);
        aO && (aM.shadowBlur = aO * aF);
        aE && (aM.shadowOffsetX = aE[0] * aF, aM.shadowOffsetY = aE[1] * aF);
        aM.drawImage(aJ, aI, aD, aP, aL);
        return {
            image: aH,
            width: aG / aF,
            height: j / aF
        }
    }

    function t(aP, aH, aN) {
        var aO = parseInt(aP.toString().length * aN),
            aG = parseInt(aN * 2 * aP.length),
            aE = O(aO, aG),
            aK, j, aF, aJ, aM, aL, aD, aI;
        if (!aE) {
            return null
        }
        aK = aE.getContext("2d");
        aK.fillStyle = "#000";
        aK.fillRect(0, 0, aO, aG);
        W(aK, aN + "px " + aH, "#fff", aP, 0, 0, 0, 0, [], "centre");
        j = aK.getImageData(0, 0, aO, aG);
        aF = j.width;
        aJ = j.height;
        aI = {
            min: {
                x: aF,
                y: aJ
            },
            max: {
                x: -1,
                y: -1
            }
        };
        for (aL = 0; aL < aJ; ++aL) {
            for (aM = 0; aM < aF; ++aM) {
                aD = (aL * aF + aM) * 4;
                if (j.data[aD + 1] > 0) {
                    if (aM < aI.min.x) {
                        aI.min.x = aM
                    }
                    if (aM > aI.max.x) {
                        aI.max.x = aM
                    }
                    if (aL < aI.min.y) {
                        aI.min.y = aL
                    }
                    if (aL > aI.max.y) {
                        aI.max.y = aL
                    }
                }
            }
        }
        if (aF != aO) {
            aI.min.x *= (aO / aF);
            aI.max.x *= (aO / aF)
        }
        if (aJ != aG) {
            aI.min.y *= (aO / aJ);
            aI.max.y *= (aO / aJ)
        }
        aE = null;
        return aI
    }

    function o(i) {
        return "'" + i.replace(/(\'|\")/g, "").replace(/\s*,\s*/g, "', '") + "'"
    }

    function ab(i, j, aD) {
        aD = aD || C;
        if (aD.addEventListener) {
            aD.addEventListener(i, j, false)
        } else {
            aD.attachEvent("on" + i, j)
        }
    }

    function a(i, j, aD) {
        aD = aD || C;
        if (aD.removeEventListener) {
            aD.removeEventListener(i, j)
        } else {
            aD.detachEvent("on" + i, j)
        }
    }

    function ar(aH, aD, aL, aG) {
        var aM = aG.imageScale,
            aJ, aE, aI, j, aF, aK;
        if (!aD.complete) {
            return ab("load", function() {
                ar(aH, aD, aL, aG)
            }, aD)
        }
        if (!aH.complete) {
            return ab("load", function() {
                ar(aH, aD, aL, aG)
            }, aH)
        }
        aD.width = aD.width;
        aD.height = aD.height;
        if (aM) {
            aH.width = aD.width * aM;
            aH.height = aD.height * aM
        }
        aL.iw = aH.width;
        aL.ih = aH.height;
        if (aG.txtOpt) {
            aE = aH;
            aJ = aG.zoomMax * aG.txtScale;
            aF = aL.iw * aJ;
            aK = aL.ih * aJ;
            if (aF < aD.naturalWidth || aK < aD.naturalHeight) {
                aE = at(aH, aF, aK);
                if (aE) {
                    aL.fimage = aE
                }
            } else {
                aF = aL.iw;
                aK = aL.ih;
                aJ = 1
            }
            if (!aL.HasText()) {
                if (aG.shadow) {
                    aE = Y(aL.image, aF, aK, aJ, aG.shadow, aG.shadowBlur, aG.shadowOffset);
                    if (aE) {
                        aL.fimage = aE.image;
                        aL.w = aE.width;
                        aL.h = aE.height
                    }
                }
                if (aG.bgColour || aG.bgOutlineThickness) {
                    aI = aG.bgColour == "tag" ? X(aL.a, "background-color") : aG.bgColour;
                    j = aG.bgOutline == "tag" ? X(aL.a, "color") : (aG.bgOutline || aG.textColour);
                    aF = aL.fimage.width;
                    aK = aL.fimage.height;
                    if (aG.outlineMethod == "colour") {
                        aE = ay(aL.fimage, aF, aK, aJ, aI, aG.bgOutlineThickness, aG.outlineColour, aG.padding, aG.bgRadius, 1);
                        if (aE) {
                            aL.oimage = aE.image
                        }
                    }
                    aE = ay(aL.fimage, aF, aK, aJ, aI, aG.bgOutlineThickness, j, aG.padding, aG.bgRadius);
                    if (aE) {
                        aL.fimage = aE.image;
                        aL.w = aE.width;
                        aL.h = aE.height
                    }
                }
                if (aG.outlineMethod == "size") {
                    if (aG.outlineIncrease > 0) {
                        aL.iw += 2 * aG.outlineIncrease;
                        aL.ih += 2 * aG.outlineIncrease;
                        aF = aJ * aL.iw;
                        aK = aJ * aL.ih;
                        aE = at(aL.fimage, aF, aK);
                        aL.oimage = aE;
                        aL.fimage = v(aL.fimage, aL.oimage.width, aL.oimage.height)
                    } else {
                        aF = aJ * (aL.iw + (2 * aG.outlineIncrease));
                        aK = aJ * (aL.ih + (2 * aG.outlineIncrease));
                        aE = at(aL.fimage, aF, aK);
                        aL.oimage = v(aE, aL.fimage.width, aL.fimage.height)
                    }
                }
            }
        }
        aL.Init()
    }

    function X(aE, aD) {
        var j = C.defaultView,
            i = aD.replace(/\-([a-z])/g, function(aF) {
                return aF.charAt(1).toUpperCase()
            });
        return (j && j.getComputedStyle && j.getComputedStyle(aE, null).getPropertyValue(aD)) || (aE.currentStyle && aE.currentStyle[i])
    }

    function u(j, aE, aD) {
        var i = 1,
            aF;
        if (aE) {
            i = 1 * (j.getAttribute(aE) || aD)
        } else {
            if (aF = X(j, "font-size")) {
                i = (aF.indexOf("px") > -1 && aF.replace("px", "") * 1) || (aF.indexOf("pt") > -1 && aF.replace("pt", "") * 1.25) || aF * 3.3
            }
        }
        return i
    }

    function f(i) {
        return i.target && ag(i.target.id) ? i.target.id : i.srcElement.parentNode.id
    }

    function R(aF, aG) {
        var aE, aD, i = parseInt(X(aG, "width")) / aG.width,
            j = parseInt(X(aG, "height")) / aG.height;
        if (ag(aF.offsetX)) {
            aE = {
                x: aF.offsetX,
                y: aF.offsetY
            }
        } else {
            aD = aa(aG.id);
            if (ag(aF.changedTouches)) {
                aF = aF.changedTouches[0]
            }
            if (aF.pageX) {
                aE = {
                    x: aF.pageX - aD.x,
                    y: aF.pageY - aD.y
                }
            }
        }
        if (aE && i && j) {
            aE.x /= i;
            aE.y /= j
        }
        return aE
    }

    function B(aD) {
        var j = aD.target || aD.fromElement.parentNode,
            i = y.tc[j.id];
        if (i) {
            i.mx = i.my = -1;
            i.UnFreeze();
            i.EndDrag()
        }
    }

    function ad(aH) {
        var aE, aD = y,
            j, aG, aF = f(aH);
        for (aE in aD.tc) {
            j = aD.tc[aE];
            if (j.tttimer) {
                clearTimeout(j.tttimer);
                j.tttimer = null
            }
        }
        if (aF && aD.tc[aF]) {
            j = aD.tc[aF];
            if (aG = R(aH, j.canvas)) {
                j.mx = aG.x;
                j.my = aG.y;
                j.Drag(aH, aG)
            }
            j.drawn = 0
        }
    }

    function z(aE) {
        var j = y,
            i = C.addEventListener ? 0 : 1,
            aD = f(aE);
        if (aD && aE.button == i && j.tc[aD]) {
            j.tc[aD].BeginDrag(aE)
        }
    }

    function aA(aF) {
        var aD = y,
            j = C.addEventListener ? 0 : 1,
            aE = f(aF),
            i;
        if (aE && aF.button == j && aD.tc[aE]) {
            i = aD.tc[aE];
            ad(aF);
            if (!i.EndDrag() && !i.touched) {
                i.Clicked(aF)
            }
        }
    }

    function S(aD) {
        var i = y,
            j = f(aD);
        if (j && aD.changedTouches && i.tc[j]) {
            i.tc[j].touched = 1;
            i.tc[j].BeginDrag(aD)
        }
    }

    function r(aD) {
        var i = y,
            j = f(aD);
        if (j && aD.changedTouches && i.tc[j]) {
            av(aD);
            if (!i.tc[j].EndDrag()) {
                i.tc[j].Draw();
                i.tc[j].Clicked(aD)
            }
        }
    }

    function av(aH) {
        var aE, aD = y,
            j, aG, aF = f(aH);
        for (aE in aD.tc) {
            j = aD.tc[aE];
            if (j.tttimer) {
                clearTimeout(j.tttimer);
                j.tttimer = null
            }
        }
        if (aF && aD.tc[aF] && aH.changedTouches) {
            j = aD.tc[aF];
            if (aG = R(aH, j.canvas)) {
                j.mx = aG.x;
                j.my = aG.y;
                j.Drag(aH, aG)
            }
            j.drawn = 0
        }
    }

    function ae(aD) {
        var i = y,
            j = f(aD);
        if (j && i.tc[j]) {
            aD.cancelBubble = true;
            aD.returnValue = false;
            aD.preventDefault && aD.preventDefault();
            i.tc[j].Wheel((aD.wheelDelta || aD.detail) > 0)
        }
    }

    function N() {
        E(F())
    }

    function E(aE) {
        var j = y.tc,
            aD;
        y.NextFrame(y.interval);
        aE = aE || F();
        for (aD in j) {
            j[aD].Draw(aE)
        }
    }

    function aa(aD) {
        var aG = C.getElementById(aD),
            i = aG.getBoundingClientRect(),
            aJ = C.documentElement,
            aH = C.body,
            aI = window,
            aE = aI.pageXOffset || aJ.scrollLeft,
            aK = aI.pageYOffset || aJ.scrollTop,
            aF = aJ.clientLeft || aH.clientLeft,
            j = aJ.clientTop || aH.clientTop;
        return {
            x: i.left + aE - aF,
            y: i.top + aK - j
        }
    }

    function U(j, aE, aF, aD) {
        var i = j.radius * j.z1 / (j.z1 + j.z2 + aE.z);
        return {
            x: aE.x * i * aF,
            y: aE.y * i * aD,
            z: aE.z,
            w: (j.z1 - aE.z) / j.z2
        }
    }

    function ax(i) {
        this.e = i;
        this.br = 0;
        this.line = [];
        this.text = [];
        this.original = i.innerText || i.textContent
    }
    aC = ax.prototype;
    aC.Empty = function() {
        for (var j = 0; j < this.text.length; ++j) {
            if (this.text[j].length) {
                return false
            }
        }
        return true
    };
    aC.Lines = function(aF) {
        var aE = aF ? 1 : 0,
            aG, j, aD;
        aF = aF || this.e;
        aG = aF.childNodes;
        j = aG.length;
        for (aD = 0; aD < j; ++aD) {
            if (aG[aD].nodeName == "BR") {
                this.text.push(this.line.join(" "));
                this.br = 1
            } else {
                if (aG[aD].nodeType == 3) {
                    if (this.br) {
                        this.line = [aG[aD].nodeValue];
                        this.br = 0
                    } else {
                        this.line.push(aG[aD].nodeValue)
                    }
                } else {
                    this.Lines(aG[aD])
                }
            }
        }
        aE || this.br || this.text.push(this.line.join(" "));
        return this.text
    };
    aC.SplitWidth = function(aD, aK, aH, aG) {
        var aF, aE, aJ, aI = [];
        aK.font = aG + "px " + aH;
        for (aF = 0; aF < this.text.length; ++aF) {
            aJ = this.text[aF].split(/\s+/);
            this.line = [aJ[0]];
            for (aE = 1; aE < aJ.length; ++aE) {
                if (aK.measureText(this.line.join(" ") + " " + aJ[aE]).width > aD) {
                    aI.push(this.line.join(" "));
                    this.line = [aJ[aE]]
                } else {
                    this.line.push(aJ[aE])
                }
            }
            aI.push(this.line.join(" "))
        }
        return this.text = aI
    };

    function I(i, j) {
        this.ts = F();
        this.tc = i;
        this.tag = j;
        this.x = this.y = this.w = this.h = this.sc = 1;
        this.z = 0;
        this.Draw = i.pulsateTo < 1 && i.outlineMethod != "colour" ? this.DrawPulsate : this.DrawSimple;
        this.radius = i.outlineRadius | 0;
        this.SetMethod(i.outlineMethod)
    }
    x = I.prototype;
    x.SetMethod = function(aD) {
        var j = {
                block: ["PreDraw", "DrawBlock"],
                colour: ["PreDraw", "DrawColour"],
                outline: ["PostDraw", "DrawOutline"],
                classic: ["LastDraw", "DrawOutline"],
                size: ["PreDraw", "DrawColour"],
                none: ["LastDraw"]
            },
            i = j[aD] || j.outline;
        if (aD == "none") {
            this.Draw = function() {
                return 1;
            }
        } else {
            this.drawFunc = this[i[1]];
        }
        this[i[0]] = this.Draw;
    };
    
    x.Update = function(aJ, aI, aK, aF, aG, aH, aE, i) {
        var j = this.tc.outlineOffset,
            aD = 2 * j;
        this.x = aG * aJ + aE - j;
        this.y = aG * aI + i - j;
        this.w = aG * aK + aD;
        this.h = aG * aF + aD;
        this.sc = aG;
        this.z = aH
    };
    x.DrawOutline = function(aG, i, aF, j, aD, aE) {
        aG.strokeStyle = aE;
        an(aG, i, aF, j, aD, this.radius, true)
    };
    x.DrawColour = function(aE, aH, aF, aI, aD, i, aJ, j, aG) {
        if (aJ.oimage) {
            aJ.alpha = 1;
            aJ.Draw(aE, j, aG, aJ.oimage);
            return 1
        }
        return this[aJ.image ? "DrawColourImage" : "DrawColourText"](aE, aH, aF, aI, aD, i, aJ, j, aG)
    };
    x.DrawColourText = function(aF, aI, aG, aJ, aD, i, aK, j, aH) {
        var aE = aK.colour;
        aK.colour = i;
        aK.alpha = 1;
        aK.Draw(aF, j, aH);
        aK.colour = aE;
        return 1
    };
    x.DrawColourImage = function(aI, aL, aJ, aM, aH, i, aP, j, aK) {
        var aN = aI.canvas,
            aF = ~~s(aL, 0),
            aE = ~~s(aJ, 0),
            aG = az(aN.width - aF, aM) + 0.5 | 0,
            aO = az(aN.height - aE, aH) + 0.5 | 0,
            aD;
        if (p) {
            p.width = aG, p.height = aO
        } else {
            p = O(aG, aO)
        }
        if (!p) {
            return this.SetMethod("outline")
        }
        aD = p.getContext("2d");
        aD.drawImage(aN, aF, aE, aG, aO, 0, 0, aG, aO);
        aI.clearRect(aF, aE, aG, aO);
        aP.alpha = 1;
        aP.Draw(aI, j, aK);
        aI.setTransform(1, 0, 0, 1, 0, 0);
        aI.save();
        aI.beginPath();
        aI.rect(aF, aE, aG, aO);
        aI.clip();
        aI.globalCompositeOperation = "source-in";
        aI.fillStyle = i;
        aI.fillRect(aF, aE, aG, aO);
        aI.restore();
        aI.globalCompositeOperation = "destination-over";
        aI.drawImage(p, 0, 0, aG, aO, aF, aE, aG, aO);
        aI.globalCompositeOperation = "source-over";
        return 1
    };
    x.DrawBlock = function(aG, i, aF, j, aD, aE) {
        aG.fillStyle = aE;
        an(aG, i, aF, j, aD, this.radius)
    };
    x.DrawSimple = function(aF, i, j, aE) {
        var aD = this.tc;
        aF.setTransform(1, 0, 0, 1, 0, 0);
        aF.strokeStyle = aD.outlineColour;
        aF.lineWidth = aD.outlineThickness;
        aF.shadowBlur = aF.shadowOffsetX = aF.shadowOffsetY = 0;
        aF.globalAlpha = 1;
        return this.drawFunc(aF, this.x, this.y, this.w, this.h, aD.outlineColour, i, j, aE)
    };
    x.DrawPulsate = function(aG, i, j, aE) {
        var aF = F() - this.ts,
            aD = this.tc;
        aG.setTransform(1, 0, 0, 1, 0, 0);
        aG.strokeStyle = aD.outlineColour;
        aG.lineWidth = aD.outlineThickness;
        aG.shadowBlur = aG.shadowOffsetX = aG.shadowOffsetY = 0;
        aG.globalAlpha = aD.pulsateTo + ((1 - aD.pulsateTo) * (0.5 + (w(2 * Math.PI * aF / (1000 * aD.pulsateTime)) / 2)));
        return this.drawFunc(aG, this.x, this.y, this.w, this.h, aD.outlineColour, i, j, aE)
    };
    x.Active = function(aD, i, j) {
        return (i >= this.x && j >= this.y && i <= this.x + this.w && j <= this.y + this.h)
    };
    x.PreDraw = x.PostDraw = x.LastDraw = aw;

    function e(aE, aO, aK, aN, aL, aF, aD, aH, aM, aG, aJ, j, aI, i) {
        this.tc = aE;
        this.image = null;
        this.text = aO;
        this.text_original = i;
        this.line_widths = [];
        this.title = aK.title || null;
        this.a = aK;
        this.position = new ac(aN[0], aN[1], aN[2]);
        this.x = this.y = this.z = 0;
        this.w = aL;
        this.h = aF;
        this.colour = aD || aE.textColour;
        this.bgColour = aH || aE.bgColour;
        this.bgRadius = aM | 0;
        this.bgOutline = aG || this.colour;
        this.bgOutlineThickness = aJ | 0;
        this.textFont = j || aE.textFont;
        this.padding = aI | 0;
        this.sc = this.alpha = 1;
        this.weighted = !aE.weight
    }
    c = e.prototype;
    c.Init = function(j) {
        var i = this.tc;
        this.outline = new I(i, this);
        this.textHeight = i.textHeight;
        if (this.HasText()) {
            this.Measure(i.ctxt, i)
        } else {
            this.w = this.iw;
            this.h = this.ih
        }
        this.SetShadowColour = i.shadowAlpha ? this.SetShadowColourAlpha : this.SetShadowColourFixed;
        this.SetDraw(i)
    };
    c.Draw = aw;
    c.HasText = function() {
        return this.text && this.text[0].length > 0
    };
    c.EqualTo = function(aD) {
        var j = aD.getElementsByTagName("img");
        if (this.a.href != aD.href) {
            return 0
        }
        if (j.length) {
            return this.image.src == j[0].src
        }
        return (aD.innerText || aD.textContent) == this.text_original
    };
    c.SetImage = function(j) {
        this.image = this.fimage = j
    };
    c.SetDraw = function(i) {
        this.Draw = this.fimage ? (i.ie > 7 ? this.DrawImageIE : this.DrawImage) : this.DrawText;
        i.noSelect && (this.CheckActive = aw)
    };
    c.MeasureText = function(aG) {
        var aE, aD = this.text.length,
            j = 0,
            aF;
        for (aE = 0; aE < aD; ++aE) {
            this.line_widths[aE] = aF = aG.measureText(this.text[aE]).width;
            j = s(j, aF)
        }
        return j
    };
    c.Measure = function(aI, aL) {
        var aJ = t(this.text, this.textFont, this.textHeight),
            aM, i, aF, j, aD, aH, aK, aE, aG;
        aK = aJ ? aJ.max.y + aJ.min.y : this.textHeight;
        aI.font = this.font = this.textHeight + "px " + this.textFont;
        aH = this.MeasureText(aI);
        if (aL.txtOpt) {
            aM = aL.txtScale;
            i = aM * this.textHeight;
            aF = i + "px " + this.textFont;
            j = [aM * aL.shadowOffset[0], aM * aL.shadowOffset[1]];
            aI.font = aF;
            aD = this.MeasureText(aI);
            aG = new g(this.text, aF, aD + aM, (aM * aK) + aM, aD, this.line_widths, aL.textAlign, aL.textVAlign, aM);
            if (this.image) {
                aG.SetImage(this.image, this.iw, this.ih, aL.imagePosition, aL.imagePadding, aL.imageAlign, aL.imageVAlign, aL.imageScale)
            }
            aE = aG.Create(this.colour, this.bgColour, this.bgOutline, aM * this.bgOutlineThickness, aL.shadow, aM * aL.shadowBlur, j, aM * this.padding, aM * this.bgRadius);
            if (aL.outlineMethod == "colour") {
                this.oimage = aG.Create(aL.outlineColour, this.bgColour, aL.outlineColour, aM * this.bgOutlineThickness, aL.shadow, aM * aL.shadowBlur, j, aM * this.padding, aM * this.bgRadius)
            } else {
                if (aL.outlineMethod == "size") {
                    aJ = t(this.text, this.textFont, this.textHeight + aL.outlineIncrease);
                    i = aJ.max.y + aJ.min.y;
                    aF = (aM * (this.textHeight + aL.outlineIncrease)) + "px " + this.textFont;
                    aI.font = aF;
                    aD = this.MeasureText(aI);
                    aG = new g(this.text, aF, aD + aM, (aM * i) + aM, aD, this.line_widths, aL.textAlign, aL.textVAlign, aM);
                    if (this.image) {
                        aG.SetImage(this.image, this.iw + aL.outlineIncrease, this.ih + aL.outlineIncrease, aL.imagePosition, aL.imagePadding, aL.imageAlign, aL.imageVAlign, aL.imageScale)
                    }
                    this.oimage = aG.Create(this.colour, this.bgColour, this.bgOutline, aM * this.bgOutlineThickness, aL.shadow, aM * aL.shadowBlur, j, aM * this.padding, aM * this.bgRadius);
                    if (aL.outlineIncrease > 0) {
                        aE = v(aE, this.oimage.width, this.oimage.height)
                    } else {
                        this.oimage = v(this.oimage, aE.width, aE.height)
                    }
                }
            }
            if (aE) {
                this.fimage = aE;
                aH = this.fimage.width / aM;
                aK = this.fimage.height / aM
            }
            this.SetDraw(aL);
            aL.txtOpt = !!this.fimage
        }
        this.h = aK;
        this.w = aH
    };
    c.SetFont = function(j, aE, aD, i) {
        this.textFont = j;
        this.colour = aE;
        this.bgColour = aD;
        this.bgOutline = i;
        this.Measure(this.tc.ctxt, this.tc)
    };
    c.SetWeight = function(aD) {
        var j = this.tc,
            aF = j.weightMode.split(/[, ]/),
            i, aE, aG = aD.length;
        if (!this.HasText()) {
            return
        }
        this.weighted = true;
        for (aE = 0; aE < aG; ++aE) {
            i = aF[aE] || "size";
            if ("both" == i) {
                this.Weight(aD[aE], j.ctxt, j, "size", j.min_weight[aE], j.max_weight[aE], aE);
                this.Weight(aD[aE], j.ctxt, j, "colour", j.min_weight[aE], j.max_weight[aE], aE)
            } else {
                this.Weight(aD[aE], j.ctxt, j, i, j.min_weight[aE], j.max_weight[aE], aE)
            }
        }
        this.Measure(j.ctxt, j)
    };
    c.Weight = function(aD, aI, aE, j, aH, aF, aG) {
        aD = isNaN(aD) ? 1 : aD;
        var i = (aD - aH) / (aF - aH);
        if ("colour" == j) {
            this.colour = k(aE, i, aG)
        } else {
            if ("bgcolour" == j) {
                this.bgColour = k(aE, i, aG)
            } else {
                if ("bgoutline" == j) {
                    this.bgOutline = k(aE, i, aG)
                } else {
                    if ("size" == j) {
                        if (aE.weightSizeMin > 0 && aE.weightSizeMax > aE.weightSizeMin) {
                            this.textHeight = aE.weightSize * (aE.weightSizeMin + (aE.weightSizeMax - aE.weightSizeMin) * i)
                        } else {
                            this.textHeight = s(1, aD * aE.weightSize)
                        }
                    }
                }
            }
        }
    };
    c.SetShadowColourFixed = function(aD, j, i) {
        aD.shadowColor = j
    };
    c.SetShadowColourAlpha = function(aD, j, i) {
        aD.shadowColor = T(j, i)
    };
    c.DrawText = function(aF, aI, aE) {
        var aJ = this.tc,
            aH = this.x,
            aG = this.y,
            aK = this.sc,
            j, aD;
        aF.globalAlpha = this.alpha;
        aF.fillStyle = this.colour;
        aJ.shadow && this.SetShadowColour(aF, aJ.shadow, this.alpha);
        aF.font = this.font;
        aH += aI / aK;
        aG += (aE / aK) - (this.h / 2);
        for (j = 0; j < this.text.length; ++j) {
            aD = aH;
            if ("right" == aJ.textAlign) {
                aD += this.w / 2 - this.line_widths[j]
            } else {
                if ("centre" == aJ.textAlign) {
                    aD -= this.line_widths[j] / 2
                } else {
                    aD -= this.w / 2
                }
            }
            aF.setTransform(aK, 0, 0, aK, aK * aD, aK * aG);
            aF.fillText(this.text[j], 0, 0);
            aG += this.textHeight
        }
    };
    c.DrawImage = function(aF, aM, aE, aH) {
        var aJ = this.x,
            aG = this.y,
            aN = this.sc,
            j = aH || this.fimage,
            aK = this.w,
            aD = this.h,
            aI = this.alpha,
            aL = this.shadow;
        aF.globalAlpha = aI;
        aL && this.SetShadowColour(aF, aL, aI);
        aJ += (aM / aN) - (aK / 2);
        aG += (aE / aN) - (aD / 2);
        aF.setTransform(aN, 0, 0, aN, aN * aJ, aN * aG);
        aF.drawImage(j, 0, 0, aK, aD)
    };
    c.DrawImageIE = function(aF, aJ, aE) {
        var j = this.fimage,
            aK = this.sc,
            aI = j.width = this.w * aK,
            aD = j.height = this.h * aK,
            aH = (this.x * aK) + aJ - (aI / 2),
            aG = (this.y * aK) + aE - (aD / 2);
        aF.setTransform(1, 0, 0, 1, 0, 0);
        aF.globalAlpha = this.alpha;
        aF.drawImage(j, aH, aG)
    };
    c.Calc = function(i, aD) {
        var j, aG = this.tc,
            aF = aG.minBrightness,
            aE = aG.maxBrightness,
            aH = aG.max_radius;
        j = i.xform(this.position);
        this.xformed = j;
        j = U(aG, j, aG.stretchX, aG.stretchY);
        this.x = j.x;
        this.y = j.y;
        this.z = j.z;
        this.sc = j.w;
        this.alpha = aD * aq(aF + (aE - aF) * (aH - this.z) / (2 * aH), 0, 1)
    };
    c.UpdateActive = function(aI, aD, aG) {
        var aF = this.outline,
            j = this.w,
            aE = this.h,
            i = this.x - j / 2,
            aH = this.y - aE / 2;
        aF.Update(i, aH, j, aE, this.sc, this.z, aD, aG);
        return aF
    };
    c.CheckActive = function(aF, i, aE) {
        var j = this.tc,
            aD = this.UpdateActive(aF, i, aE);
        return aD.Active(aF, j.mx, j.my) ? aD : null
    };
    c.Clicked = function(aG) {
        var j = this.a,
            aD = j.target,
            aE = j.href,
            i;
        if (aD != "" && aD != "_self") {
            if (self.frames[aD]) {
                self.frames[aD].document.location = aE
            } else {
                try {
                    if (top.frames[aD]) {
                        top.frames[aD].document.location = aE;
                        return
                    }
                } catch (aF) {}
                window.open(aE, aD)
            }
            return
        }
        if (C.createEvent) {
            i = C.createEvent("MouseEvents");
            i.initMouseEvent("click", 1, 1, window, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null);
            if (!j.dispatchEvent(i)) {
                return
            }
        } else {
            if (j.fireEvent) {
                if (!j.fireEvent("onclick")) {
                    return
                }
            }
        }
        C.location = aE
    };

    function y(aJ, j, aE) {
        var aD, aG, aI = C.getElementById(aJ),
            aF = ["id", "class", "innerHTML"],
            aH;
        if (!aI) {
            throw 0
        }
        if (ag(window.G_vmlCanvasManager)) {
            aI = window.G_vmlCanvasManager.initElement(aI);
            this.ie = parseFloat(navigator.appVersion.split("MSIE")[1])
        }
        if (aI && (!aI.getContext || !aI.getContext("2d").fillText)) {
            aG = C.createElement("DIV");
            for (aD = 0; aD < aF.length; ++aD) {
                aG[aF[aD]] = aI[aF[aD]]
            }
            aI.parentNode.insertBefore(aG, aI);
            aI.parentNode.removeChild(aI);
            throw 0
        }
        for (aD in y.options) {
            this[aD] = aE && ag(aE[aD]) ? aE[aD] : (ag(y[aD]) ? y[aD] : y.options[aD])
        }
        this.canvas = aI;
        this.ctxt = aI.getContext("2d");
        this.z1 = 250 / this.depth;
        this.z2 = this.z1 / this.zoom;
        this.radius = az(aI.height, aI.width) * 0.0075;
        this.max_weight = [];
        this.min_weight = [];
        this.textFont = this.textFont && o(this.textFont);
        this.textHeight *= 1;
        this.pulsateTo = aq(this.pulsateTo, 0, 1);
        this.minBrightness = aq(this.minBrightness, 0, 1);
        this.maxBrightness = aq(this.maxBrightness, this.minBrightness, 1);
        this.ctxt.textBaseline = "top";
        this.lx = (this.lock + "").indexOf("x") + 1;
        this.ly = (this.lock + "").indexOf("y") + 1;
        this.frozen = this.dx = this.dy = this.fixedAnim = this.touched = 0;
        this.fixedAlpha = 1;
        this.source = j || aJ;
        this.transform = Q.Identity();
        this.startTime = this.time = F();
        this.mx = this.my = -1;
        this.Animate = this.dragControl ? this.AnimateDrag : this.AnimatePosition;
        this.animTiming = (typeof y[this.animTiming] == "function" ? y[this.animTiming] : y.Smooth);
        if (this.shadowBlur || this.shadowOffset[0] || this.shadowOffset[1]) {
            this.ctxt.shadowColor = this.shadow;
            this.shadow = this.ctxt.shadowColor;
            this.shadowAlpha = aj()
        } else {
            delete this.shadow
        }
        this.Load();
        if (j && this.hideTags) {
            (function(i) {
                if (y.loaded) {
                    i.HideTags()
                } else {
                    ab("load", function() {
                        i.HideTags()
                    }, window)
                }
            })(this)
        }
        this.yaw = this.initial ? this.initial[0] * this.maxSpeed : 0;
        this.pitch = this.initial ? this.initial[1] * this.maxSpeed : 0;
        if (this.tooltip) {
            this.ctitle = aI.title;
            aI.title = "";
            if (this.tooltip == "native") {
                this.Tooltip = this.TooltipNative
            } else {
                this.Tooltip = this.TooltipDiv;
                if (!this.ttdiv) {
                    this.ttdiv = C.createElement("div");
                    this.ttdiv.className = this.tooltipClass;
                    this.ttdiv.style.position = "absolute";
                    this.ttdiv.style.zIndex = aI.style.zIndex + 1;
                    ab("mouseover", function(i) {
                        i.target.style.display = "none"
                        	
                    }, this.ttdiv);
                    C.body.appendChild(this.ttdiv)
                }
            }
        } else {
            this.Tooltip = this.TooltipNone
        }
        if (!this.noMouse && !b[aJ]) {
            b[aJ] = [
                ["mousemove", ad],
                ["mouseout", B],
                ["mouseup", aA],
                ["touchstart", S],
                ["touchend", r],
                ["touchcancel", r],
                ["touchmove", av]
            ];
            if (this.dragControl) {
                b[aJ].push(["mousedown", z]);
                b[aJ].push(["selectstart", aw])
            }
            if (this.wheelZoom) {
                b[aJ].push(["mousewheel", ae]);
                b[aJ].push(["DOMMouseScroll", ae])
            }
            for (aD = 0; aD < b[aJ].length; ++aD) {
                ab(b[aJ][aD][0], b[aJ][aD][1], aI)
            }
        }
        if (!y.started) {
            aH = window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
            y.NextFrame = aH ? y.NextFrameRAF : y.NextFrameTimeout;
            y.interval = this.interval;
            y.NextFrame(this.interval);
            y.started = 1
        }
    }
    P = y.prototype;
    P.SourceElements = function() {
        if (C.querySelectorAll) {
            return C.querySelectorAll("#" + this.source)
        }
        return [C.getElementById(this.source)]
    };
    P.HideTags = function() {
        var aD = this.SourceElements(),
            j;
        for (j = 0; j < aD.length; ++j) {
            aD[j].style.display = "none"
        }
    };
    P.GetTags = function() {
        var aH = this.SourceElements(),
            aG, aD = [],
            aF, aE;
        for (aF = 0; aF < aH.length; ++aF) {
            aG = aH[aF].getElementsByTagName("a");
            for (aE = 0; aE < aG.length; ++aE) {
                aD.push(aG[aE])
            }
        }
        return aD
    };
    P.Message = function(aI) {
        var aK = [],
            aE, j, aD = aI.split(""),
            aG, aJ, aH, aF;
        for (aE = 0; aE < aD.length; ++aE) {
            if (aD[aE] != " ") {
                j = aE - aD.length / 2;
                aG = C.createElement("A");
                aG.href = "#";
                aG.innerText = aD[aE];
                aH = 100 * af(j / 9);
                aF = -100 * w(j / 9);
                aJ = new e(this, aD[aE], aG, [aH, 0, aF], 2, 18, "#000", "#fff", 0, 0, 0, "monospace", 2, aD[aE]);
                aJ.Init();
                aK.push(aJ)
            }
        }
        return aK
    };
    P.CreateTag = function(aH) {
        var aK, aF, aL, aG, aJ, aD, aI, aE, j = [0, 0, 0];
        if ("text" != this.imageMode) {
            aK = aH.getElementsByTagName("img");
            if (aK.length) {
                aF = new Image;
                aF.src = aK[0].src;
                if (!this.imageMode) {
                    aL = new e(this, "", aH, j, 0, 0);
                    aL.SetImage(aF);
                    ar(aF, aK[0], aL, this);
                    return aL
                }
            }
        }
        if ("image" != this.imageMode) {
            aJ = new ax(aH);
            aG = aJ.Lines();
            if (!aJ.Empty()) {
                aD = this.textFont || o(X(aH, "font-family"));
                if (this.splitWidth) {
                    aG = aJ.SplitWidth(this.splitWidth, this.ctxt, aD, this.textHeight)
                }
                aI = this.bgColour == "tag" ? X(aH, "background-color") : this.bgColour;
                aE = this.bgOutline == "tag" ? X(aH, "color") : this.bgOutline
            } else {
                aJ = null
            }
        }
        if (aJ || aF) {
            aL = new e(this, aG, aH, j, 2, this.textHeight + 2, this.textColour || X(aH, "color"), aI, this.bgRadius, aE, this.bgOutlineThickness, aD, this.padding, aJ && aJ.original);
            if (aF) {
                aL.SetImage(aF);
                ar(aF, aK[0], aL, this)
            } else {
                aL.Init()
            }
            return aL
        }
    };
    P.UpdateTag = function(aD, i) {
        var aG = this.textColour || X(i, "color"),
            j = this.textFont || o(X(i, "font-family")),
            aF = this.bgColour == "tag" ? X(i, "background-color") : this.bgColour,
            aE = this.bgOutline == "tag" ? X(i, "color") : this.bgOutline;
        aD.a = i;
        aD.title = i.title;
        if (aD.colour != aG || aD.textFont != j || aD.bgColour != aF || aD.bgOutline != aE) {
            aD.SetFont(j, aG, aF, aE)
        }
    };
    P.Weight = function(aJ) {
        var aF = aJ.length,
            aH, aD, aK, aG = [],
            j, aE = this.weightFrom ? this.weightFrom.split(/[, ]/) : [null],
            aI = aE.length;
        for (aD = 0; aD < aF; ++aD) {
            aG[aD] = [];
            for (aK = 0; aK < aI; ++aK) {
                aH = u(aJ[aD].a, aE[aK], this.textHeight);
                if (!this.max_weight[aK] || aH > this.max_weight[aK]) {
                    this.max_weight[aK] = aH
                }
                if (!this.min_weight[aK] || aH < this.min_weight[aK]) {
                    this.min_weight[aK] = aH
                }
                aG[aD][aK] = aH
            }
        }
        for (aK = 0; aK < aI; ++aK) {
            if (this.max_weight[aK] > this.min_weight[aK]) {
                j = 1
            }
        }
        if (j) {
            for (aD = 0; aD < aF; ++aD) {
                aJ[aD].SetWeight(aG[aD])
            }
        }
    };
    P.Load = function() {
        var aN = this.GetTags(),
            aI = [],
            aL, aM, aH, aE, aD, j, aF, aK, aG = [],
            aJ = {
                sphere: q,
                vcylinder: ak,
                hcylinder: ap,
                vring: d,
                hring: n
            };
        if (aN.length) {
            aG.length = aN.length;
            for (aK = 0; aK < aN.length; ++aK) {
                aG[aK] = aK
            }
            this.shuffleTags && al(aG);
            aE = 100 * this.radiusX;
            aD = 100 * this.radiusY;
            j = 100 * this.radiusZ;
            this.max_radius = s(aE, s(aD, j));
            for (aK = 0; aK < aN.length; ++aK) {
                aM = this.CreateTag(aN[aG[aK]]);
                if (aM) {
                    aI.push(aM)
                }
            }
            this.weight && this.Weight(aI, true);
            if (this.shapeArgs) {
                this.shapeArgs[0] = aI.length
            } else {
                aH = this.shape.toString().split(/[(),]/);
                aL = aH.shift();
                this.shape = aJ[aL] || aJ.sphere;
                this.shapeArgs = [aI.length, aE, aD, j].concat(aH)
            }
            aF = this.shape.apply(this, this.shapeArgs);
            this.listLength = aI.length;
            for (aK = 0; aK < aI.length; ++aK) {
                aI[aK].position = new ac(aF[aK][0], aF[aK][1], aF[aK][2])
            }
        }
        if (this.noTagsMessage && !aI.length) {
        	aI = this.Message("")
        }
        this.taglist = aI
    };
    P.Update = function() {
        var aM = this.GetTags(),
            aL = [],
            aG = this.taglist,
            aN, aK = [],
            aI = [],
            aE, aJ, aD, aH, aF;
        if (!this.shapeArgs) {
            return this.Load()
        }
        if (aM.length) {
            aD = this.listLength = aM.length;
            aJ = aG.length;
            for (aH = 0; aH < aJ; ++aH) {
                aL.push(aG[aH]);
                aI.push(aH)
            }
            for (aH = 0; aH < aD; ++aH) {
                for (aF = 0, aN = 0; aF < aJ; ++aF) {
                    if (aG[aF].EqualTo(aM[aH])) {
                        this.UpdateTag(aL[aF], aM[aH]);
                        aN = aI[aF] = -1
                    }
                }
                if (!aN) {
                    aK.push(aH)
                }
            }
            for (aH = 0, aF = 0; aH < aJ; ++aH) {
                if (aI[aF] == -1) {
                    aI.splice(aF, 1)
                } else {
                    ++aF
                }
            }
            if (aI.length) {
                al(aI);
                while (aI.length && aK.length) {
                    aH = aI.shift();
                    aF = aK.shift();
                    aL[aH] = this.CreateTag(aM[aF])
                }
                aI.sort(function(j, i) {
                    return j - i
                });
                while (aI.length) {
                    aL.splice(aI.pop(), 1)
                }
            }
            aF = aL.length / (aK.length + 1);
            aH = 0;
            while (aK.length) {
                aL.splice(am(++aH * aF), 0, this.CreateTag(aM[aK.shift()]))
            }
            this.shapeArgs[0] = aD = aL.length;
            aE = this.shape.apply(this, this.shapeArgs);
            for (aH = 0; aH < aD; ++aH) {
                aL[aH].position = new ac(aE[aH][0], aE[aH][1], aE[aH][2])
            }
            this.weight && this.Weight(aL)
        }
        this.taglist = aL
    };
    P.SetShadow = function(i) {
        i.shadowBlur = this.shadowBlur;
        i.shadowOffsetX = this.shadowOffset[0];
        i.shadowOffsetY = this.shadowOffset[1]
    };
    P.Draw = function(aN) {
        if (this.paused) {
            return
        }
        var aH = this.canvas,
            aF = aH.width,
            aM = aH.height,
            aP = 0,
            aE = (aN - this.time) * y.interval / 1000,
            aL = aF / 2 + this.offsetX,
            aK = aM / 2 + this.offsetY,
            aT = this.ctxt,
            aJ, aU, aR, aD = -1,
            aG = this.taglist,
            aQ = aG.length,
            j = this.frontSelect,
            aO = (this.centreFunc == aw),
            aI;
        this.time = aN;
        if (this.frozen && this.drawn) {
            return this.Animate(aF, aM, aE)
        }
        aI = this.AnimateFixed();
        aT.setTransform(1, 0, 0, 1, 0, 0);
        for (aR = 0; aR < aQ; ++aR) {
            aG[aR].Calc(this.transform, this.fixedAlpha)
        }
        aG = A(aG, function(aV, i) {
            return i.z - aV.z
        });
        if (aI && this.fixedAnim.active) {
            aJ = this.fixedAnim.tag.UpdateActive(aT, aL, aK)
        } else {
            this.active = null;
            for (aR = 0; aR < aQ; ++aR) {
                aU = this.mx >= 0 && this.my >= 0 && this.taglist[aR].CheckActive(aT, aL, aK);
                if (aU && aU.sc > aP && (!j || aU.z <= 0)) {
                    aJ = aU;
                    aD = aR;
                    aJ.tag = this.taglist[aR];
                    aP = aU.sc
                }
            }
            this.active = aJ
        }
        this.txtOpt || (this.shadow && this.SetShadow(aT));
        aT.clearRect(0, 0, aF, aM);
        for (aR = 0; aR < aQ; ++aR) {
            if (!aO && aG[aR].z <= 0) {
                try {
                    this.centreFunc(aT, aF, aM, aL, aK)
                } catch (aS) {
                    alert(aS);
                    this.centreFunc = aw
                }
                aO = true
            }
            if (!(aJ && aJ.tag == aG[aR] && aJ.PreDraw(aT, aG[aR], aL, aK))) {
                aG[aR].Draw(aT, aL, aK)
            }
            aJ && aJ.tag == aG[aR] && aJ.PostDraw(aT)
        }
        if (this.freezeActive && aJ) {
            this.Freeze()
        } else {
            this.UnFreeze();
            this.drawn = (aQ == this.listLength)
        }
        if (this.fixedCallback) {
            this.fixedCallback(this, this.fixedCallbackTag);
            this.fixedCallback = null
        }
        aI || this.Animate(aF, aM, aE);
        aJ && aJ.LastDraw(aT);
        aH.style.cursor = aJ ? this.activeCursor : "";
        this.Tooltip(aJ, this.taglist[aD])
    };
    P.TooltipNone = function() {};
    P.TooltipNative = function(j, i) {
        if (j) {
            this.canvas.title = i && i.title ? i.title : ""
        } else {
            this.canvas.title = this.ctitle
        }
    };
    P.SetTTDiv = function(aE, j) {
        var i = this,
            aD = i.ttdiv.style;
        if (aE != i.ttdiv.innerHTML) {
            aD.display = "none"
        }
        i.ttdiv.innerHTML = aE;
        j && (j.title = i.ttdiv.innerHTML);
        if (aD.display == "none" && !i.tttimer) {
            i.tttimer = setTimeout(function() {
                var aF = aa(i.canvas.id);
                aD.display = "block";
                aD.left = aF.x + i.mx + "px";
                aD.top = aF.y + i.my + 24 + "px";
                i.tttimer = null
            }, i.tooltipDelay)
        }
    };
    P.TooltipDiv = function(j, i) {
        if (j && i && i.title) {
            this.SetTTDiv(i.title, i)
        } else {
            if (!j && this.mx != -1 && this.my != -1 && this.ctitle.length) {
                this.SetTTDiv(this.ctitle)
            } else {
                this.ttdiv.style.display = "none"
            }
        }
    };
    P.Transform = function(aG, i, aI) {
        if (i || aI) {
            var j = af(i),
                aH = w(i),
                aJ = af(aI),
                aF = w(aI),
                aD = new Q([aF, 0, aJ, 0, 1, 0, -aJ, 0, aF]),
                aE = new Q([1, 0, 0, 0, aH, -j, 0, j, aH]);
            aG.transform = aG.transform.mul(aD.mul(aE))
        }
    };
    P.AnimateFixed = function() {
        var aD, j, aF, i, aE;
        if (this.fadeIn) {
            j = F() - this.startTime;
            if (j >= this.fadeIn) {
                this.fadeIn = 0;
                this.fixedAlpha = 1
            } else {
                this.fixedAlpha = j / this.fadeIn
            }
        }
        if (this.fixedAnim) {
            if (!this.fixedAnim.transform) {
                this.fixedAnim.transform = this.transform
            }
            aD = this.fixedAnim, j = F() - aD.t0, aF = aD.angle, i, aE = this.animTiming(aD.t, j);
            this.transform = aD.transform;
            if (j >= aD.t) {
                this.fixedCallbackTag = aD.tag;
                this.fixedCallback = aD.cb;
                this.fixedAnim = this.yaw = this.pitch = 0
            } else {
                aF *= aE
            }
            i = Q.Rotation(aF, aD.axis);
            this.transform = this.transform.mul(i);
            return (this.fixedAnim != 0)
        }
        return false
    };
    P.AnimatePosition = function(aD, aG, aE) {
        var j = this,
            i = j.mx,
            aI = j.my,
            aF, aH;
        if (!j.frozen && i >= 0 && aI >= 0 && i < aD && aI < aG) {
            aF = j.maxSpeed, aH = j.reverse ? -1 : 1;
            j.lx || (j.yaw = ((i * 2 * aF / aD) - aF) * aH * aE);
            j.ly || (j.pitch = ((aI * 2 * aF / aG) - aF) * -aH * aE);
            j.initial = null
        } else {
            if (!j.initial) {
                if (j.frozen && !j.freezeDecel) {
                    j.yaw = j.pitch = 0
                } else {
                    j.Decel(j)
                }
            }
        }
        this.Transform(j, j.pitch, j.yaw)
    };
    P.AnimateDrag = function(j, aF, aE) {
        var i = this,
            aD = 100 * aE * i.maxSpeed / i.max_radius / i.zoom;
        if (i.dx || i.dy) {
            i.lx || (i.yaw = i.dx * aD / i.stretchX);
            i.ly || (i.pitch = i.dy * -aD / i.stretchY);
            i.dx = i.dy = 0;
            i.initial = null
        } else {
            if (!i.initial) {
                i.Decel(i)
            }
        }
        this.Transform(i, i.pitch, i.yaw)
    };
    P.Freeze = function() {
        if (!this.frozen) {
            this.preFreeze = [this.yaw, this.pitch];
            this.frozen = 1;
            this.drawn = 0
        }
    };
    P.UnFreeze = function() {
        if (this.frozen) {
            this.yaw = this.preFreeze[0];
            this.pitch = this.preFreeze[1];
            this.frozen = 0
        }
    };
    P.Decel = function(i) {
        var aD = i.minSpeed,
            aE = K(i.yaw),
            j = K(i.pitch);
        if (!i.lx && aE > aD) {
            i.yaw = aE > i.z0 ? i.yaw * i.decel : 0
        }
        if (!i.ly && j > aD) {
            i.pitch = j > i.z0 ? i.pitch * i.decel : 0
        }
    };
    P.Zoom = function(i) {
        this.z2 = this.z1 * (1 / i);
        this.drawn = 0
    };
    P.Clicked = function(aD) {
        var i = this.active;
        try {
            if (i && i.tag) {
                if (this.clickToFront === false || this.clickToFront === null) {
                    i.tag.Clicked(aD)
                } else {
                    this.TagToFront(i.tag, this.clickToFront, function() {
                        i.tag.Clicked(aD)
                    }, true)
                }
            }
        } catch (j) {}
    };
    P.Wheel = function(j) {
        var aD = this.zoom + this.zoomStep * (j ? 1 : -1);
        this.zoom = az(this.zoomMax, s(this.zoomMin, aD));
        this.Zoom(this.zoom)
    };
    P.BeginDrag = function(i) {
        this.down = R(i, this.canvas);
        i.cancelBubble = true;
        i.returnValue = false;
        i.preventDefault && i.preventDefault()
    };
    P.Drag = function(aF, aE) {
        if (this.dragControl && this.down) {
            var aD = this.dragThreshold * this.dragThreshold,
                j = aE.x - this.down.x,
                i = aE.y - this.down.y;
            if (this.dragging || j * j + i * i > aD) {
                this.dx = j;
                this.dy = i;
                this.dragging = 1;
                this.down = aE
            }
        }
    };
    P.EndDrag = function() {
        var i = this.dragging;
        this.dragging = this.down = null;
        return i
    };
    P.Pause = function() {
        this.paused = true
    };
    P.Resume = function() {
        this.paused = false
    };
    P.SetSpeed = function(j) {
        this.initial = j;
        this.yaw = j[0] * this.maxSpeed;
        this.pitch = j[1] * this.maxSpeed
    };
    P.FindTag = function(aD) {
        if (!ag(aD)) {
            return null
        }
        ag(aD.index) && (aD = aD.index);
        if (!H(aD)) {
            return this.taglist[aD]
        }
        var aE, aF, j;
        if (ag(aD.id)) {
            aE = "id", aF = aD.id
        } else {
            if (ag(aD.text)) {
                aE = "innerText", aF = aD.text
            }
        }
        for (j = 0; j < this.taglist.length; ++j) {
            if (this.taglist[j].a[aE] == aF) {
                return this.taglist[j]
            }
        }
    };
    P.RotateTag = function(aL, aE, aK, i, aI, aD) {
        var aJ = aL.xformed,
            aG = new ac(aJ.x, aJ.y, aJ.z),
            aF = ah(aK, aE),
            j = aG.angle(aF),
            aH = aG.cross(aF).unit();
        if (j == 0) {
            this.fixedCallbackTag = aL;
            this.fixedCallback = aI
        } else {
            this.fixedAnim = {
                angle: -j,
                axis: aH,
                t: i,
                t0: F(),
                cb: aI,
                tag: aL,
                active: aD
            }
        }
    };
    P.TagToFront = function(i, aD, aE, j) {
        this.RotateTag(i, 0, 0, aD, aE, j)
    };
    y.Start = function(aD, i, j) {
        y.Delete(aD);
        y.tc[aD] = new y(aD, i, j)
    };

    function au(i, j) {
        y.tc[j] && y.tc[j][i]()
    }
    y.Linear = function(i, j) {
        return j / i
    };
    y.Smooth = function(i, j) {
        return 0.5 - w(j * Math.PI / i) / 2
    };
    y.Pause = function(i) {
        au("Pause", i)
    };
    y.Resume = function(i) {
        au("Resume", i)
    };
    y.Reload = function(i) {
        au("Load", i)
    };
    y.Update = function(i) {
        au("Update", i)
    };
    y.SetSpeed = function(j, i) {
        if (H(i) && y.tc[j] && !isNaN(i[0]) && !isNaN(i[1])) {
            y.tc[j].SetSpeed(i);
            return true
        }
        return false
    };
    y.TagToFront = function(j, i) {
        if (!H(i)) {
            return false
        }
        i.lat = i.lng = 0;
        return y.RotateTag(j, i)
    };
    y.RotateTag = function(aD, i) {
        if (H(i) && y.tc[aD]) {
            if (isNaN(i.time)) {
                i.time = 500
            }
            var j = y.tc[aD].FindTag(i);
            if (j) {
                y.tc[aD].RotateTag(j, i.lat, i.lng, i.time, i.callback, i.active);
                return true
            }
        }
        return false
    };
    y.Delete = function(aE) {
        var j, aD;
        if (b[aE]) {
            aD = C.getElementById(aE);
            if (aD) {
                for (j = 0; j < b[aE].length; ++j) {
                    a(b[aE][j][0], b[aE][j][1], aD)
                }
            }
        }
        delete b[aE];
        delete y.tc[aE]
    };
    y.NextFrameRAF = function() {
        requestAnimationFrame(E)
    };
    y.NextFrameTimeout = function(i) {
        setTimeout(N, i)
    };
    y.tc = {};
    y.options = {
        z1: 20000,
        z2: 20000,
        z0: 0.0002,
        freezeActive: true,
        freezeDecel: false,
        activeCursor: "pointer",
        pulsateTo: 1,
        pulsateTime: 3,
        reverse: false,
        /**
         * reverse: 
         * 마우스 위치 기준으로 이동 방향을 반대로하려면 TRUE
         */ 
        depth: 0.3,
        maxSpeed: 0.03,  // 최대 회전속도
        minSpeed: 0.01,  // 마우스가 영역 벗어났을때 최소 회전 속도
        decel: 0.30,//0.95,
        interval: 20,
        minBrightness:0.3,// 0.1, 최소 밝기
        maxBrightness:5, //1, 최대 밝기
        outlineColour: "#ffff99",
        outlineThickness: 10,//2,
        outlineOffset: 5,
        outlineMethod: "outline",
        outlineRadius: 0,
        textColour: "#000",//"#00f", //폰트의 색깔
        textHeight: 20,// 전체 글꼴크기
        textFont:"나눔바른고딕",//"Helvetica, Arial, sans-serif", //글꼴
        shadow: "#FC0000",
        /**
         * shadow:
         * 각 태그 뒤의 그림자
         * 속성으로는 "#"
         */
        
        shadowBlur: 0,
        shadowOffset: [0, 0],
        initial: [0.05,0.05],
        hideTags: true,
        /**
         * hideTags
         * 성공적으로 시작되고 태그목록 요소를 자동으로 숨기려면 TRUE 
         */
        
        zoom: 1,
        weight: true,
       /* 
          가중치 활성화 유무
           false,true
       */
        
        weightMode: "both",
        /** 
        weightMode: 
        "size"=>글꼴 크기를 사용해서 표시
        "colour"=> 색상를 사용해서 표시
        "both"=>크기,색상 동시에 사용
       */
        
        weightFrom:"data-weight",
        /**
         * weightFrom
         * 태그의 가중치를 가져오는 속성 임
         * JSP단에서 data-weight="값" DB에서 개수 가져와서 넣어주면 됨
         */
        
        weightSize: 2.5, //2, size or both 사용할때 가중치 배율은 얼마로 줄거냐
        weightSizeMin: 2.5, //null, 가중치 최소
        weightSizeMax: 8, //null, 가중치 최대
        weightGradient: 
        {
            0: "#007CBC", //1위
            0.01: "#000000", //"#ff0",
            0.02: "#000000", //"#0f0",
            0.5: "#666666", //"#0f0"
            1: "#666666", //"#00f"
        },
        /**
        	weightGradient
       		=> 키워드 수가 많을 수록 1 임-> 0 으로
       */
        txtOpt: true,
        txtScale: 2,
        frontSelect: false,
        wheelZoom: true,
        zoomMin: 0.3,
        zoomMax: 3,
        zoomStep: 0.05,
        shape: "sphere", 
        /** 
            shape: 회전 모양 설정
            1.구형: sphere
        	2.수직 실린더: "vcylinder"
        	3.수평 실린더: "hcylinder", 
        	                   lock: "x"
        	4.수평 링: "hring"
        	5.수직 링: "vring(0.5)"
        	              offsety: -60
        	              lock:"x"
       */
        lock: null,
        tooltip: null,
        tooltipDelay: 300,
        tooltipClass: "tctooltip",
        radiusX: 1, 
        radiusY: 1, 
        radiusZ: 1,
        /**
         * radiusX: 중심에서 측면까지의 구름의 초기 크기 
         * radiusY: 중심에서 상단 및 하단까지 구름의 초기크기
         * radiusZ: 중앙에서 앞뒤로 구름의 초기 크기
         * 
         */
        
        stretchX: 1,
        stretchY: 1,
        offsetX: 0,//0,
        offsetY: 0,
        shuffleTags: true,
        /**
         * shuffleTags: 태그의 순서
         *  TRUE=>  순서 무작위
         *  FALSE=> 순서대로
         */
        noSelect: false,
        noMouse: false,
        imageScale: 1,
        paused: false,
        dragControl: false,
        dragThreshold: 4,
        centreFunc: aw,
        splitWidth: 0
        
        ,animTiming: "Smooth",
        clickToFront: false,
        fadeIn: 0,
        padding: 0,
        bgColour: null,
        bgRadius: 0,
        bgOutline: null,
        bgOutlineThickness: 0,
        outlineIncrease: 4,
        textAlign: "centre",
        textVAlign: "middle",
        imageMode: null,
        imagePosition: null,
        imagePadding: 2,
        imageAlign: "centre",
        imageVAlign: "middle",
        noTagsMessage: true
    };
    for (L in y.options) {
        y[L] = y.options[L]
    }
    window.TagCanvas = y;
    ab("load", function() {
        y.loaded = 1
    }, window)
})();