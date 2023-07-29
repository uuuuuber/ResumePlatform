const resumeModel: TSRcReduxModel.Props<TSResume.IntactResume> = {
  namespace: 'resumeModel',
  openSeamlessImmutable: true,
  state: {
    base: {
      avatar: '',
      username: '姓名',
      area: '贯籍',
      school: '学校',
      major: '专业',
      degree: '本科',
      hometown: '',
      onSchoolTime: {
        beginTime: 'xxxx.xx',
        endTime: 'xxxx.xx',
      },
    },
    contact: {
      phone: '*******',
      email: '*******',
      github: '*******',
      juejin: '*******',
    },
    work: {
      job: '*******',
      city: '',
      cityList: [],
    },
    hobby: '',
    skill:
      '',
    skillList: [

    ],
    evaluation:
      '',
    evaluationList: [

    ],
    certificate: '*******',
    certificateList: ['*******'],
    schoolExperience: [
      {
        beginTime: '',
        endTime: '',
        post: '',
        department: '',
        content:
          '',
        parseContent: [
          '',
          '',
        ],
      },
    ],
    workExperience: [
      {
        beginTime: '',
        endTime: '',
        post: '',
        department: '',
        content:
          '',
        parseContent: [
          '',
          '',
        ],
      },
    ],
    projectExperience: [
      {
        beginTime: '',
        endTime: '',
        projectName: '',
        post: '',
        content:
          '',
        parseContent: [

        ],
        date: 1621145137865,
      },
    ],
  },
};

export default resumeModel;
