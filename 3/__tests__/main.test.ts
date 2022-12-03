import { getPrioritySum, getGroupedPrioritySum, getDuplicateBagContent, getPriorityForItem } from '../src/main.js';

const testInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const puzzleInput = `gtZDjBcmpcDgpZcmmbgtdtqmCGVCGGsvhCFCCqvmCMMM
JrhfzfLTNfJhPnhQnfzHfCFFQFSGvMFCGQFsQSMSVs
TllTRrfNNlfzwhtZBZgtRDBp
vMdwjZdjwjvjdTZZvCcQMGnQMQcbcgLLCL
rsVhfmssPWzDVGCLJSbCgPLSQG
lfWNDHDgfszFRTFtwwNjdv
GLPqVqdVGCLCdczjMjzMfzld
JnWQvJDmvWBtlMzhrzfHQgcz
tDtJDDDDtWRRmBwJwWtpPRsGCGScLPGSqspNCS
ChVzZzfNDzNJmBQfjjJfmH
MrTMPMncGMJvPPvPWTbrMWvgmBgQwgdpwmdpdpjwpHQcdw
SPvvvbqrFvMvZzJzsFVzVJNV
mvBbvMFqbMMVVmtCBHpDdDPTDspdNWPDVP
zjSfftcQtwtSfQSpNDppsNsjPNdRPP
fgfStJShrgvvCLLv
GmFnNNwbFFbhQQGQnGwwwfBgnMMqVDBZVVBMfMVzVz
vWzRRHzTHcgfZDVfBgfH
SSTvrvRcPpcvjFGwNGbNpbwQwz
FFgbZZFZgFmpstLgmbtzqNrwVPlMPlSWWrMPNp
QQhTvjhcvjjvTcTcTfCcSRwwWzwzPMrzWNNWVVhwrwWq
GRQBfCRnGGTcDvBfGvffCCjnFZtFFgStJLbLHbFLJZdgmd
pppdjcrMMRDJLJdRcwRDrwssqHGGDHsZHHsvBVtvmVHV
nlCFWzGzzQFlSlhGWnPzFbSsBZmsssmVVmsBvnHqvNVqqm
lFTTTCSQSTrdGJJLJG
jpsGMgsmghQwQsMmhlQshjtTNTRTnFqRWnnqRfFnnt
SLBCHrcvZHbSvSZrSvSWnfvVNvftVlFRTqnRTq
JrzdZbBcHBCrrlHrrSsMgmGpJPDPQmpgQgPG
cmcZHgwgMgHSLmtjLfWPNNrWBNfffp
JTqGTsClHslVVRVCVGVJGnBrjdnnrdBNvjPNBNBrWvnW
VVlQlqTFJlzzlsVGsRCZMthHDbwbFhgcbwHchg
qgZjgjjbssqgsjlNqjhTtdrfQdTdWLLnDVfHtHWd
zcGMBDDzcLnztfQQQz
JSppJcBScMmMFFBRCpRCMmGlggvjhbhlNlglwbslCZjhDZ
hvhmqcqwwcTBvvwQnRQnRnTRFzFzQz
jWLPPtPsgMtpdLMLWllpgLLQFQhFJjnVrzFrVFhnRzJJrJ
WPWffgtSdspdhSMdlSdtfBbHmSvqbNBCCmcBmcvcCH
frVcrVcggfSZJfbbJvBd
hwWQnwhWQmQmThTSsdvvSMBTBzcb
wGnFFCGlQwntGtCtwntwDmFwRgLrHqNRqqcNNgRrHHLggCjp
wRSwwHDMsRGHvNBNjTgvjgJD
mcLcFCclWQWQpPQWVQcQcvvNJjrNBTrvgJgBvTRvCg
VFPbQLchQLSRfbMtdHGH
lfVrhnlRRqrJZVDJdHSWCvJCJSbj
BFsgcgMNNQgSvbfCff
ffNPcMtzqPlnmRGh
ZJplFmRJmWRJRWmTJCvtTtnLCtndCqtqnr
SQsVPQHBQZNSNSLCfSLrcLcrrr
VMjPjbNMDsVHmRllmZpZWmjh
LcTLRbJhhdhLJbbclfVvfWQVWFRWFFfq
rZNttSNvtgsPPFsqBFPWQF
HGCSmHrrwNnHGMLpDhbzzpmJJv
VlSWzRtWSJqWdfhdqBdF
mTDHsmmmcHpgrCgCrTsMMtqfsFNsZqfdMZMNbd
TDcpvrpHCprCpHrmcQvTHgTQzSnLJnPPJlLzwJtRVJwLjJ
vZSWZJZJFvhZldZHdvvlphZSNGNnmzwCPNHNHGNrrRHGCPmP
bjfgcbjTQTFQBnGRRBCBNwBnCz
csqscsbssQLsgQcLgLQLQTQpFdlhdvdZdpZWhJplShWWtq
QgQvHnfflfBwQCfwlfglnQQccNcRqGGcjmcsGjddwdzsJc
DhZbTLZTDMVTsRzsqsRjszTz
FSZVtMLMMWbSgqSvPQlnpH
MMPllnnBmfSHvBgCLf
whZjGRJdjcNjjhRjCvgCfbSvCZLHfpZs
RRWGWwNRWwhwclmrgFmngFPMWm
VVHQGDGDGsdRrmZBQZRCVHZCNcSTTPMwwvTTwSSNqBqvgMvN
nfhdLfjFnJpblLbJjWhtnjWPScNnwSTPTPqTvgngNNvSvS
fpWljtpLjflfLfzlhZGQHZQVddHrrQRDRz
VCHCjwCwMSZSqQzhhQqcWZJD
GGGrFFgNRNNgmfnTdgmWQpczvPvQPWQJGDpzzc
lgTttRTgmfNRntrTTngrCbjCwJCHjLBBHlMVMsbB
szgPPlCblggVszhLmzvcvNrqpjNqmrqqpGvG
wBQDtBfQDtFvLjjctLqTMr
ZFWWdDLQFwSfDSBSQQBWnnnQVdbhgRVbsHzsshbClzzCVggb
VpVsHVcqcMVMMNHpsspstbMqzBztJZTBBfJfzTvZfvWJWSTv
mDDQgCQQQHdrwgSvZSmJJZvWfJJf
drCjggDlPdgrlbjNcnhcHsbpsj
cNNDRRpDcNcTpppsqHLQGLfRLvHzLH
lFntJjtbFFlsmsjvnGqHWLfhfqzzQh
sgPbjBJtPgbPJblblJgbgbwdBTwDCwpwrdZZVcCcDppc
GGclMjLnnjCMchcChLMLcnnzRFJDZJSRSzzzzDSShszPRS
VHgFQgwVwfNNpQVfHzQsPPPJDbmZbJDJbS
HfNVWdHVvgHgVWVNppNWVHwTlvBFcClBCjcTLTlBnnLrTL
GTLdlJhffQwDRvWLrp
HVZVNjjsPqzNjNNmNgDWMrRQpWvWRHrDHBWp
VCqVzjPjCpVqCVPCsbctcnblcGlTbGnlbFJf
flHdfdBNdZcflBMjqMjBNfZQhvJbGvqvsshJQsJCJDWvvD
gFTzRRpzRTwbgbLmtCvsJhWsChrWCrtWCC
VzzzFbVRLPznmRBffPNBHNMdlZfl
FFFMwCqJFFmrRwgnbLrL
GpjGpQHQpfjdjDRnLrbrRQmJzzgg
BphfhDcNcHNvPBvSqJMWJS
NndbWpDBNbjvWLZqWsWQ
JPFFTSPfgcMgftQQGjvTmsGqzssG
gPgcfcVFgcHqSqVhbBCHlpbbpDlhDD
FSdfWFTTBnjsDCjsmrrT
pQzLRVLppLGcQjqbmVDJsChCvCbVsm
qHLRGqqZzGjLqBNMFdnHlNlBFN
DjqbfBTchDjqqCjjCTWNTbdzSVzGZQGBwZnQnVwpSSnQ
ssJlPrtvMsRLrrJQGNZJSpZpGzSG
rlFssHsvPRPMvFmtHvtqjhTgjbqhWqNmNqgDNh
vcpnRqwwLLbvvcGpDQWDFSCgMrWWQWRR
gtNfBfllrFlHrlrl
ZPzftBmsNBNBPJBZPmZPNtmPdGLsqbwqpqcndVLLGpVGvqgV
vRBfQqqBQPfbrFvPBvPbhLDVDVDQZVVtZtlWLLLt
jcJmFFwnhJVZLWVl
sHTcmNNHzncmcjmdsBCrBCPCrBBqCFrqzb
bbZRnGmNnBGGMNRTgCmWWGGSrvSvFHvzFvFQDF
LjwphpdPdLpLJVqfJrQzDzfrvQHSvDcQrQ
DJphdwDsnmbZsTZM
rdNrZNBSzSztnNzWCcNpHlMwlwHWlM
QqLGLJvLjtvQWhgHgchHwHJw
GtjTGtDRqvfLRGnrzsmZmfrVFBrV
TdMhZrTTNvwphcLL
WnnmffmDWnWPsPCJNpNcpNVNQp
fsjbWfFFfnmmDsFDnnflSSdczlMdTHTzTTRRBdtT
cMcPcMcwgWJMjWWhFWCCQCmqCFdh
bSLVLblnNnLbVfnsbSbCChSQdChptpdqZrmCmZ
DLGNfnGVDNDHbfzjRcRgqHMRBJPc
HVFVlVHjzjjlCJjHjCjnvDrggrgLdqzddMqrzz
SSfBTmtNdLqngvrm
TwnNfPWWpBSBNtTHZCGlPHCQJHZHPV
prvccpFQpMcQBwsvssshdwSTPD
qbGHVbNJGqwdPgDrTsDJ
fGbGqqlGGHflqLlzZBBrRcrtrZlp
fCSPhltMBmPmbdgd
DjvJJscvTsHHDbWzBWsWbdwgLB
VVHDZvTppRcJVFFppvvRJDJqMSGqCtZdthttrnthSZMGCr
ZcSrSdrhDjBDDCmZdZmZjhwVHwqVVsMwgswVVwMfhw
PNvzTPNbnzcPbGQNJTvqwsWgVgVMMWpQqwgHpp
JTPGPTzNttnbRTPlPtNNRlFrFmBcmDljjmBFSCmLZZBr
mNvRRCVMtNRdFNtMtBHHprpHgJgJWwpBnprg
LZDDlSLlTslDfbcpJJWndwcscnwr
qdZZGSDhMVRCGtmC
VGFjjgBShGdGzQczcGRG
MppqCDfCMwfLDfvNmrtWstRcMPzRMRsRsPQS
NwDCffLppbqqrqvTBngSbnBHglZllH
vdllJVDzmVDVqvvWvdqJlcWrCsfCsfSSsSJfCSfQQCCbCQ
jnTHZPZHMjZhMjTpHgMpgnbNqBstnfrtSSrBSNssCrfN
LHLTFLjTMTTTwjHhpHTcwmDcWVDlvRDmvqwWlW
rqQsSStdmsdLqlNNPGlGlV
FpFpzJNTcHzRHRHlGwFVLFBLFGVvlw
WCCjWRNJTJWhQhbhrbnd
jsQjfrRTRwzSsRTgNchlnlhqcnlQmQ
dFDtdFBDddHLJpVpHHtVbtHFCWlWlGlNlmGggNqgglmcchqb
dLDHMVdLtBBDBFVJBFthtJHRTvsMSvsTrTSRvPPjPzSwRP
CSPpSrLlrlPrPchLnSlbDbbRttDVhbGRDDJRtD
fzfvmzTMmfsFszsHZsHMHVfwtbjBDDGjtRBjQQGGJb
HmvmTFmqmTsHqzzzzdTsMMScndccdLppnLCSPcCLrVgr
pfMflRnfrnjrpjnFzDpfDMmMLRTLZVTgLsvdZgLLZHSVWZRd
tBGNhwPGcNBBWwZddsSTTPgVLPdT
JwthtwbbhNBQhwhbBCrzpnprnWnprlzWlClD
PPnZZjnFNDjlJJhtMddfTTdD
QGLHFWvQJtzfpvCt
swqSmmQWLQwFWLwwRcqNNBnnbgPqbPNbglVZ
GCLSjjZGZhpvGtBgjJlnJDhhJMVDPnJlJP
mNtQQwNzQRHWdJHnPTsddlln
zQrfmbtNbcQcrzmrRBZqBcvpjSGLZGLZBB
zGNzgsjDssvNbPlWJfJq
RLMVSRMLhCLZSMZHDSJWvpcqfbfhvpJqcWPv
dMVHLFHLZMLRLLFRHHHVZMgDTntgstGwznzGGnzjDFwG
wCLCHLBwzBtQRLHLbNFFfdqdDqVrVfBN
JGvljmgGZvMlfDRRnnnZnfND
GppRlgJlSllSgjMsmllpTjcCLczWztPWPwwwzWThtcQh
WvHbvvWnFHszDRSltcCctCFD
gCmJmCCPTPqpgrZtjdRtDRplcSjS
rJJrQPPJQmrmrhGTznCfLMMbfvWfbCWQ
TqBWtTbFBNNRRtwQpJJvvvZPpTSQ
fRMfsMssrGhSmMwSQvvZJm
VggcVlsCgHnVFnndbbnR
NdrSSWBNPPSWWHPPlwlLZHLZLMhjlLLH
pVptMTgVTzLwZTzlbF
qsRmRJtsMvMqgqgRvCdcSrWSPcWrDmmdBN
nbJnfqWcmCMnSBSHwzWBsHHz
dVpdvdppdptppDlvlHcczSgNcgww
VGTdTVtGtRLFPTDbcfCmmcCQJQjcrT
VTjrjrjTlTjQMdpGrWMSHvSG
wnNJbDmttnwnhNwcJmNGdvWvMSfvMfhSSppSdp
JznFnNsGnzzGFDJsFNmLgVVQZBlLZjQTLTjTls
hpngHwcpWHgjjfhzTJBfBB
RFFbFlQlSdRsbRQQMGPRGdSGjBvvNTvzZMBvjzBBTJTvMBBT
GPSSPDDDFzGlGGRzLzGGPRWqnprcgCHwCHpwHWVcncLV
LLlLGffQLPRThRwP
MpZjbmznWqmqZznmzmpZqZnMRgPBCTPfgRTTwTjhwBPPghjP
VnZpMsMMJnWsmnJpJmzrtFlGQFrHGvSvfHStNV
MQqHMQPnqmpDdTLLRnDjsj
NGFzwgtLBtFFGrrCtzgfgCNgSsdTDSSTsdssjDdSlZRjTSBs
zCwNLthfrbCgzzhqhmccJPhQHVmV
SndBVcgdqcRBRcdPBBcVcQTSSMLMlTssMNMWsHMsLQ
GmJvZvhqpvZtNwwWLTTLwMMm
JFJpzFGZqjvhGZcjBPcCBBPnnVBc
rJWbqTvwvJNbPDPPvLcZvPDp
QMnfBsjmFPLcHRDfPp
lQlMlmtFsMMBstljlnGhtMhmGNqJqTcWNNbWdGwdNNJCrTrq
LcjcNCQNQWDpRDjRTj
vWvszVVSsBGWsTJRFHRJTTSTRJ
vvGbtqbGVVBqtzbqvBdzVLWNLClwnwMLWlQNMfdPQP
TWBZsWrjzZzWBrBsrrsTLNNJvFnJVmlSFFQnGpmnSJJS
qdCggdqqqhhqwhRbCwbCPqhlJFPPGJQVvvvnpVVmPnnFvS
ffgCfghDqDdCsGWZjTsLrsfW
QzQSSQmzSsLQcLmrcsLzccgqCnwqCtZDnDnrZwgnqTTT
hFRHHRPRPMtWPGVPRlMljRPCgWBBDTgJBgnwqTZDBZDWDB
jPjPHRMjjvdjVFhdNfbsbbQfbcddmNtL
jJlTqMqJtdztJqzcSJSlTdSlprLsRRHwcRRrsrHbrnnRHsHL
VVVMWNNWmNmLnPLRHrLp
NGhfvvVWBNfNNCNCQTMqjzgTQBSSSqll
SSSRMRSRpnMRHLqWLfPlDGlGWldD
hbNtlmvrNrsVDWsGPfPfqG
jvbBNmvlJjRcCzHFppCJ
hhWWPjnBGBGnjqBWSnhhsNLllLNcLczJcqcTlLTlfl
FHvFFMHwdmvrDbwCbbvHwdHnZTMLzTNTczflJTZclzNLlLcJ
HdFFvdDvpCDdrnwrGhBQhWRRpsjQWWQW
sBsvtJtdRdjNbWWrTllqlNgg
nSZSnPPZzMSnSlScWWWgrVWCrqgrWMWr
lzSncQcLZLzlwDvtdDdFdFJJhHvJ
lpsTLDlTtFtlWHPDvvgPfgMrQQJM
zmNbzcNjzldjwmbdbhhjcjRgfwrgvMwMMSRJSvQQvrRf
ZhjqcjzNhmzNqBqNznmcWHplCFGnpCtFsGWHHWsH
ZPGQBFHFbhSrHqtfSrSr
nMdznzzMDTnjMQrMWtrMptplqpqS
wzjczJmccTJCmcVghZBJbPBQBbVh
wLLMJbqSBBnnJhbvbFSSRRlztTrHzrrrrd
QNNGVPjWPGVqltTHWCqCdH
sjNGmmGVGgQNGDVmsVpgqQVpMDhvbLwMffZfhZbLnfLLLZwb
gQLcQrMtBPdwSBsSlmBm
TfCpTJnTbfqgsgwgppsSzp
jVbvTnvWfJnJjjbfCjWWjrFPrLMtcDPgLMQQRtgZVF
gwpHvpgwngGHcnvNvgnmsqCzmMzlfqmmqzHHCm
JrdSLdBVPRDtRtPfPPzCJhjqmljzmmqszzsM
SWLDDtVdrZWtSBRZfRcwgFGnpNFpnTnWnTvT
rpcnHrwrhWccNZDDBBgBVCSW
nmzFRRjFmmJQNDJC
qznMlqGnzRtRGvqGFRPrdMhwTpTLfLcppLHp
wthvbmhmChWMRJLJzngZpzLLNC
SsdBVjSTjBdffBFfcSdVHfTrnDZGpQgNZHNnLZGpJngJGLng
sSdTcdVScdcrccjcrBPrBSjcvmRRwlWPhwmqtgWhMPtmMMqR
CJJBdBCrHdBhtRHctBQhRMrBwZpwZWNZNSNTwSNpQWpZsSSW
LVFnvnbDjLsDPsPqFFvPvDnTzSTwNwPZpSmpSpgmgZWNTW
LjlflbFjsvVlrHcrHtrfcChH
tVLJGNRtfBBNGBrfrbzmfhPsrsPC
DWWDQHQgllSFqFzcsJmzzSSzmrrs
MJFQDgMqnHlDvFdGNBNNZGNVVvjV
wnNwGCBBFNWBqjFBnLLGVDHhHmDPHvZTjTvTrPvD
bMbttVScMJQtdgSgstbJRSPmrTHmHmrmmSDZlrPrPDhv
cMbgpsbVbzbdRMRFWLqzBfLGwwwwfW
JpSnGSGpbGgsWWPHJrdfsT
MNsRqNNvMQDTLWHlffNHLN
qqmtRzRvCRRQDqjqjDmsmRpZwSZbcwbnCcCSBBnSSnnC
TWqlqpRqRptqlRhrmtGGzhbSrSdz
VgsBVMvgVZfZvPsMVNvfZfvVbSPdhFPFhbzLhJdGFJmLhhhL
QZgvZgvHwbwHbMsMRllRjDRDnQRqlRjl
fsPQwnHnHLLfnBBnwwGtjTGRWTWTWwhV
jblbdjZFDMbGllqTGTtVlq
gmdMgZMbjpZDcrrDgdmszsPLpQfpBPPnNQNLLz
HRsPPGMhLPMrnPchPSwStjbSttSvtHSqQw
dfsCfpCJVJCvdFBFwStwjj
gTNWmWfTNVZVJzZWpWJgTpfhnDrMnDclgDlDrDRnRcMLDs
ZQZQJMqdwmZvqfPmwRjpBBjHjnshnjtt
zcTPTLDTFWLGTrTSWPcDSSHjRlhRsDhHslslssBRljjj
TrNFLbTWrGNZvmvVQPQV
htfLgmtSLcTWNLcT
slbHlBBGbqRsblBHvdNJJcjFFNBTVWWWcn
bbQsHMMblHrMsGRqvQhwCTQCwtQCzSpfmS
zmqdphmFmSpTzhdqhFmwjjGbtcvDbcGGjllGQjSP
HJFrMCsVLrHRRMCNrVMVnctvstlGcQlPtGGjQtGlvP
RFLHLVWrNgVJzwzwfgffwdfp
vdMjSmMMpmMWhRpndRmZnhvHqLpGHcJGGGDLHHLGcfcLfc
lPBwwrsCgLFggcqqLW
TWszsWNBTNdmSRvjbZZT
zFlBGpzzzLLNjBwPcwwmcNPfWNQn
VHSHRJTJDSVVnmcVVPpWmpnf
DMZHHrDHHrJrrZrShZsHGbMBbFgGjGCgjpFlBzzb
FVMpsvTqvqMssVsWZSrqWFvwlGDGwQzwfwQQNLzDlwlZwf
hPbgBHhJJcJPwCwDpNllCCHC
pnjbBmjgbgmqtSmsTtsF
DHZHmfTmCfjDZHMZmzffHHnQwwTBdQwbSdBGBQwhBQTQww
cqstRFWNtLrNFwdVShlBSlhBRl
StJWpLptNWLtJcpqPrFHDjZzzvnDDHPCZjPvvz
hzffhGVGGhzRqTBLTqHL
sFFFsMQlwJMsmrBFSNHTHNqrTS
pbdsJMdJMJbwbmJJtbTtgnffGgVVChvD
FvJnFnCpQTddSSmFdFpPPsVhppDjBzjDVhDV
RgZMZbsgzlDPlhjb
cHHHRgRZgfHHZGZfHZcLLHrrCrmJCmddrsvdJsmvFFQG
dpJDdZwLnvdvFmFMmHjslMLH
CGCztgPhWCWhzzzNNPGfrrWfmbbsmmHjFHDMsbHMsjFPjbHm
rNQDGzzhCCfNrzrDzChTcZZvQcTRJpTwdvQpVc
VpvNGhGHGNhHbPsbVbvfFtLCzSCFSBsCFSFCLB
MlqJwTnrRRrRnMlQMHfHzHzWFWtmTzLWFC
ljZDDHqqjqRbpNhjNNgcgc
qrQtDzcQzbrcfdbqrQrthtscSsvpvnsSHpTpLpspmsSs
CVwNNVRNBSHsLSFBTv
CVVVNZjlVlGwlGlljNlWJVrrfqbPQQqHqJhhftbfDJqf
lpmrPDPDjPlmWrVzPztZwFjtFbBnRtZbbcRL
dnqJCCgQdNqbqRbRbBLt
QGhGddGCTdMHNTGgshgJhzvSmWWPSsnprpPzWzsWlr
hCJHTdJJNvTdSSNssjvfwgntwDgtgwDGCtZwtRRB
mbllFmFMFbMVWWLpbpZwwBZTZnnVwnTggtDB
MmzLQpFPTmPzHvfJNNzhNs
dzgBwzlgrrBrVLLlwLBgBlgRScDMMDDswMsHZRGDsZGZmM
HPfPbjCFJjCvfnnsjsDDcccmZsRSMc
hCvHfWPPnvJhPWpqNNhqLqzLqLLd`;

const convertTestInputToArrayOfBags = (input: string): Array<string> => {
  return input.split('\n');
};

describe('convertTestInputToArrayOfBags', () => {
  it('should convert the test input into an array of compartmentalised bags', () => {
    const expectedOutput = [
      'vJrwpWtwJgWrhcsFMMfFFhFp',
      'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
      'PmmdzqPrVvPwwTWBwg',
      'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
      'ttgJtRGJQctTZtZT',
      'CrZsJsPPZsGzwwsLwLmpwMDw'
    ];

    expect(convertTestInputToArrayOfBags(testInput)).toEqual(expectedOutput);

  });
});

describe('getDuplicateBagContent', () => {
  it('should find all the duplicates in the test data', () => {
    const testBags = convertTestInputToArrayOfBags(testInput);
    const expectedResults = [
      'p',
      'L',
      'P',
      'v',
      't',
      's'
    ];

    testBags.forEach((testBag, index) => {
      expect(getDuplicateBagContent(testBag)).toBe(expectedResults[index]);
    });
  }); 
});

describe('getPriorityForItem', () => {
  it('should return the correct priority for items', () => {
    const tests = [
      {
        input: 'p',
        expected: 16
      },
      {
        input: 'L',
        expected: 38
      },
      {
        input: 'P',
        expected: 42
      },
      {
        input: 'v',
        expected: 22
      },
      {
        input: 't',
        expected: 20
      },
      {
        input: 's',
        expected: 19
      }
    ];

    tests.forEach((test) => {
      expect(getPriorityForItem(test.input)).toBe(test.expected);
    });
  });
});

describe('getPrioritySum', () => {
  it('should return priority sum for the test input', () => {
    expect(getPrioritySum(convertTestInputToArrayOfBags(testInput))).toBe(157);
  });

  it('should return priority sum for the puzzle input', () => {
    expect(getPrioritySum(convertTestInputToArrayOfBags(puzzleInput))).toBe(8394);
  });
});

describe('getGroupedPrioritySum', () => {
  it('should return grouped priority sum for the test input', () => {
    expect(getGroupedPrioritySum(convertTestInputToArrayOfBags(testInput))).toBe(70);
  });

  it('should return grouped priority sum for the puzzle input', () => {
    console.log(getGroupedPrioritySum(convertTestInputToArrayOfBags(puzzleInput)));
    expect(getGroupedPrioritySum(convertTestInputToArrayOfBags(puzzleInput))).toBe(2413);
  });
});