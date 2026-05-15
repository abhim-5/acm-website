import { useEffect, useRef, useState, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { lenis } from '@/main';
import './Team.css'; // Extract styles to a separate file

gsap.registerPlugin(ScrollTrigger);

export default function Team() {
  const horizontalWrapperRef = useRef<HTMLDivElement>(null);
  const [selectedYear, setSelectedYear] = useState(2025);
  const scrollTweenRef = useRef<gsap.core.Tween | null>(null);

  const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011];

  // ... Team Data ...
  const team2025 = [
    { id: 'sm', name: 'Smit Marakna', role: 'Chairperson', image: 'team/2025/sm.jpg', icons: ['email', 'linkedin', 'github'] },
    { id: 'ck', name: 'Chetan Kalsariya', role: 'Vice-Chairperson', image: 'team/2025/ck.jpg', icons: ['linkedin', 'github'] },
    { id: 'jp', name: 'Jay Pipaliya', role: 'Secretary', image: 'team/2025/jp.jpg', icons: ['email', 'linkedin', 'github'] },
    { id: 'as', name: 'Archit Savaliya', role: 'Secretary', image: 'team/2025/as.jpg', icons: ['email', 'linkedin', 'github'] },
    { id: 'dp', name: 'Dhruv Patel', role: 'Treasurer', image: 'team/2025/dp.jpg', icons: ['email', 'linkedin', 'github'] },
    { id: 'at', name: 'Anand Tiwari', role: 'Treasurer', image: 'team/2025/at.jpg', icons: ['email', 'linkedin', 'github'] },
    { id: 'fg', name: 'Foram Gandhi', role: 'Community Head', image: 'team/2025/fg.jpg', icons: ['email', 'linkedin'] },
    { id: 'mg', name: 'Miten Gandhi', role: 'Developer', image: 'team/2025/mg.jpg', icons: ['email', 'linkedin', 'github'] },
    { id: 'pk', name: 'Purv Kabaria', role: 'Developer', image: 'team/2025/pk.jpg', icons: ['twitter', 'email', 'linkedin', 'github'] },
    { id: 'os', name: 'Om Satodiya', role: 'Developer', image: 'team/2025/os.jpg', icons: ['email', 'linkedin', 'github'] },
    { id: 'vg', name: 'Vanshik Godeshwar', role: 'Problem Setter', image: 'team/2025/vg.jpg', icons: ['email', 'linkedin', 'github'] },
    { id: 'dc', name: 'Deepak Challa', role: 'Problem Setter', image: 'team/2025/dc.jpg', icons: ['email', 'linkedin'] },
    { id: 'ar', name: 'Anshul Reddy', role: 'Problem Setter', image: 'team/2025/ar.jpg', icons: ['email', 'linkedin'] },
    { id: 'ad', name: 'Angela Dutta', role: 'Designer', image: 'team/2025/ad.jpg', icons: ['email', 'linkedin', 'github'] },
    { id: 'vk', name: 'Vanishka Karkera', role: 'Designer', image: 'team/2025/vk.jpg', icons: ['email', 'linkedin'] },
    { id: 'ha', name: 'Harshil Andhariya', role: 'Core Member', image: 'team/2025/ha.jpg', icons: ['email', 'linkedin', 'github'] },
    { id: 'mc', name: 'Manthan Chauhan', role: 'Core Member', image: 'team/2025/mc.jpg', icons: [] },
    { id: 'g',  name: 'Govind', role: 'Core Member', image: 'team/2025/g.jpg', icons: [] }
  ];

  const team2011 = [
    { id: 'va',  name: 'Varun Agrawal',    role: 'Chairperson',       image: 'team/2011/va.jpg',  icons: ['linkedin'] },
    { id: 'ap',  name: 'Arth Patel',       role: 'Vice-Chairperson',  image: 'team/2011/ap.jpg',  icons: [] },
    { id: 'ac',  name: 'Ankit Chandra',    role: 'Secretary',         image: 'team/2011/ac.jpg',  icons: ['linkedin'] },
    { id: 'ns',  name: 'Nimit Shah',       role: 'Secretary',         image: 'team/2011/ns.jpg',  icons: ['linkedin'] },
    { id: 'api', name: 'Aditya Prajapati', role: 'Treasurer',         image: 'team/2011/api.jpg', icons: [] },
    { id: 'jg',  name: 'Jaimin Gandhi',    role: 'Treasurer',         image: 'team/2011/jg.jpg',  icons: [] },
    { id: 'gi',  name: 'Ganesh Iyer',      role: 'Web Developer',     image: 'team/2011/gi.jpg',  icons: [] },
    { id: 'aj',  name: 'Arvind Jain',      role: 'Web Developer',     image: 'team/2011/aj.jpg',  icons: [] },
  ];

  const team2012 = [
    { id: 'av',  name: 'Aman Verma',           role: 'Chairperson',       image: 'team/2012/av.jpg',  icons: ['linkedin'] },
    { id: 'hrc', name: 'Hari Ram Chaudhary',   role: 'Vice-Chairperson',  image: 'team/2012/hrc.jpg', icons: [] },
    { id: 'ha',  name: 'Harsh Agrawal',        role: 'Secretary',         image: 'team/2012/ha.jpg',  icons: ['linkedin'] },
    { id: 'ss',  name: 'Saurabh Siddharth',    role: 'Secretary',         image: 'team/2012/ss.jpg',  icons: [] },
    { id: 'md',  name: 'Monika Daryani',       role: 'Treasurer',         image: 'team/2012/md.jpg',  icons: [] },
    { id: 'pc',  name: 'Praveen Chaudhary',    role: 'Treasurer',         image: 'team/2012/pc.jpg',  icons: [] },
    { id: 'hs',  name: 'Harsha Satya',         role: 'Web Developer',     image: 'team/2012/hs.jpg',  icons: [] },
    { id: 'js',  name: 'Jitesh Sunhala',       role: 'Web Developer',     image: 'team/2012/js.jpg',  icons: [] },
  ];

  const team2013 = [
    { id: 'mk',  name: 'Manav Prajapati',      role: 'Chairperson',       image: 'team/2013/mk.jpg',  icons: ['linkedin'] },
    { id: 'pk',  name: 'Pallavi Khandelwal',   role: 'Vice-Chairperson',  image: 'team/2013/pk.jpg',  icons: [] },
    { id: 'vs',  name: 'Vishal Singh',         role: 'Secretary',         image: 'team/2013/vs.jpg',  icons: ['linkedin'] },
    { id: 'ng',  name: 'Nishit Gajjar',        role: 'Secretary',         image: 'team/2013/ng.jpg',  icons: [] },
    { id: 'tj',  name: 'Tanisha Jain',         role: 'Treasurer',         image: 'team/2013/tj.jpg',  icons: [] },
    { id: 'sr',  name: 'Sunil Raiyani',        role: 'Treasurer',         image: 'team/2013/sr.jpg',  icons: [] },
    { id: 'sg',  name: 'Sukant Garg',          role: 'Web Developer',     image: 'team/2013/sg.jpg',  icons: [] },
    { id: 'ro',  name: 'Ravi Ojha',            role: 'Designer',          image: 'team/2013/ro.jpg',  icons: [] },
    { id: 'kj',  name: 'Kshama Jain',          role: 'Editor',            image: 'team/2013/kj.jpg',  icons: [] },
    { id: 'hn',  name: 'Heer Narang',          role: 'Editor',            image: 'team/2013/hn.jpg',  icons: [] },
  ];

  const team2014 = [
    { id: 'jp',  name: 'Jay Panchal',          role: 'Chairperson',       image: 'team/2014/jp.jpg',  icons: ['linkedin'] },
    { id: 'gs',  name: 'Gurvinder Singh',      role: 'Vice-Chairperson',  image: 'team/2014/gs.jpg',  icons: [] },
    { id: 'pa',  name: 'Prashant Arya',        role: 'Secretary',         image: 'team/2014/pa.jpg',  icons: [] },
    { id: 'ds',  name: 'Deepak Singh',         role: 'Secretary',         image: 'team/2014/ds.jpg',  icons: [] },
    { id: 'vv',  name: 'VLNP Venkatesh',       role: 'Treasurer',         image: 'team/2014/vv.jpg',  icons: [] },
    { id: 'ks',  name: 'Kushagra Shrivastava', role: 'Treasurer',         image: 'team/2014/ks.jpg',  icons: [] },
    { id: 'po',  name: 'Palash Oswal',         role: 'Web Developer',     image: 'team/2014/po.jpg',  icons: [] },
    { id: 'us',  name: 'Umang Singhal',        role: 'Web Developer',     image: 'team/2014/us.jpg',  icons: [] },
    { id: 'cm',  name: 'Chaitanya Mattey',     role: 'Designer',          image: 'team/2014/cm.jpg',  icons: [] },
    { id: 'jb',  name: 'Jay Bothra',           role: 'Editor',            image: 'team/2014/jb.jpg',  icons: [] },
    { id: 'sk',  name: 'Saksham Kumar',        role: 'Editor',            image: 'team/2014/sk.jpg',  icons: [] },
    { id: 'vk',  name: 'Vinay Kumar',          role: 'Problem Setter',    image: 'team/2014/vk.jpg',  icons: [] },
  ];

  const team2015 = [
    { id: 'yg',  name: 'Yash Golechha',        role: 'Chairperson',       image: 'team/2015/yg.jpg',  icons: ['linkedin'] },
    { id: 'ra',  name: 'Rohit Agarwal',        role: 'Vice-Chairperson',  image: 'team/2015/ra.jpg',  icons: [] },
    { id: 'ak',  name: 'Ankit Kumar',          role: 'Secretary',         image: 'team/2015/ak.jpg',  icons: [] },
    { id: 'ls',  name: 'Lucky Srivastava',     role: 'Secretary',         image: 'team/2015/ls.jpg',  icons: [] },
    { id: 'vs',  name: 'Vishnu Teja',          role: 'Web Developer',     image: 'team/2015/vs.jpg',  icons: [] },
    { id: 'rk',  name: 'Rahul Kanojia',        role: 'Web Developer',     image: 'team/2015/rk.jpg',  icons: [] },
    { id: 'ar',  name: 'Aakash Rana',          role: 'Treasurer',         image: 'team/2015/ar.jpg',  icons: [] },
    { id: 'aka', name: 'Adesh Kala',           role: 'Treasurer',         image: 'team/2015/aka.jpg', icons: [] },
    { id: 'rki', name: 'Riya Kothari',         role: 'Editor',            image: 'team/2015/rki.jpg', icons: [] },
    { id: 'vt',  name: 'Vineet Sethia',        role: 'Editor',            image: 'team/2015/vt.jpg',  icons: [] },
    { id: 'rka', name: 'Rajan Kasodariya',     role: 'Problem Setter',    image: 'team/2015/rka.jpg', icons: [] },
    { id: 'kc',  name: 'Kushagra Chauhan',     role: 'Designer',          image: 'team/2015/kc.jpg',  icons: [] },
    { id: 'hj',  name: 'Harsh Jadav',          role: 'Designer',          image: 'team/2015/hj.jpg',  icons: [] },
  ];

  const team2016 = [
    { id: 'aj',  name: 'Anshul Jain',           role: 'Chairperson',       image: 'team/2016/aj.jpg',  icons: ['linkedin'] },
    { id: 'pc',  name: 'Pradeep Ch',            role: 'Vice-Chairperson',  image: 'team/2016/pc.jpg',  icons: [] },
    { id: 'rd',  name: 'Radhesh Davulari',      role: 'Secretary',         image: 'team/2016/rd.jpg',  icons: [] },
    { id: 'kd',  name: 'Kiran Dhokane',         role: 'Secretary',         image: 'team/2016/kd.jpg',  icons: [] },
    { id: 'rns', name: 'Ram Narayan Singh',     role: 'Treasurer',         image: 'team/2016/rns.jpg', icons: [] },
    { id: 'md',  name: 'Mohith Damarapati',     role: 'Treasurer',         image: 'team/2016/md.jpg',  icons: [] },
    { id: 'sm',  name: 'Sachin Malepati',       role: 'Developer',         image: 'team/2016/sm.jpg',  icons: [] },
    { id: 'rn',  name: 'Rajul Nahar',           role: 'Developer',         image: 'team/2016/rn.jpg',  icons: [] },
    { id: 'sg',  name: 'Sanjay George',         role: 'Editor',            image: 'team/2016/sg.jpg',  icons: [] },
    { id: 'ak',  name: 'Asmita Kumar',          role: 'Editor',            image: 'team/2016/ak.jpg',  icons: [] },
    { id: 'pk',  name: 'Pawan Kolhe',           role: 'Designer',          image: 'team/2016/pk.jpg',  icons: [] },
    { id: 'pka', name: 'Pradeep Karwasra',      role: 'Designer',          image: 'team/2016/pka.jpg', icons: [] },
    { id: 'mc',  name: 'Manish Choudhary',      role: 'Problem Setter',    image: 'team/2016/mc.jpg',  icons: [] },
    { id: 'ss',  name: 'Sriyansh Srivastava',   role: 'Problem Setter',    image: 'team/2016/ss.jpg',  icons: [] },
  ];

  const team2017 = [
    { id: 'ds',  name: 'Deepanshu Sharma',      role: 'Chairperson',       image: 'team/2017/ds.jpg',  icons: ['linkedin'] },
    { id: 'sp',  name: 'Swapnil Patel',         role: 'Vice-Chairperson',  image: 'team/2017/sp.jpg',  icons: [] },
    { id: 'vg',  name: 'Vidhi Gandhi',          role: 'Secretary',         image: 'team/2017/vg.jpg',  icons: [] },
    { id: 'sn',  name: 'Sairam Naragoni',       role: 'Secretary',         image: 'team/2017/sn.jpg',  icons: [] },
    { id: 'ha',  name: 'Hunsii Ashar',          role: 'Treasurer',         image: 'team/2017/ha.jpg',  icons: [] },
    { id: 'as',  name: 'Aishwarya Solanki',     role: 'Treasurer',         image: 'team/2017/as.jpg',  icons: [] },
    { id: 'ck',  name: 'Charmi Khambhati',      role: 'Developer',         image: 'team/2017/ck.jpg',  icons: [] },
    { id: 'bp',  name: 'Bharghvi Prajapati',    role: 'Developer',         image: 'team/2017/bp.jpg',  icons: [] },
    { id: 'vm',  name: 'Vatsal Mehta',          role: 'Developer',         image: 'team/2017/vm.jpg',  icons: [] },
    { id: 'tk',  name: 'Tanishka Khatri',       role: 'Problem Setter',    image: 'team/2017/tk.jpg',  icons: [] },
    { id: 'sv',  name: 'Sandeep Varma',         role: 'Problem Setter',    image: 'team/2017/sv.jpg',  icons: [] },
    { id: 'sb',  name: 'Simran Bawkar',         role: 'Problem Setter',    image: 'team/2017/sb.jpg',  icons: [] },
    { id: 'r',   name: 'Rohit',                 role: 'Designer',          image: 'team/2017/r.jpg',   icons: [] },
    { id: 'pz',  name: 'Priyansh Zalavadiya',   role: 'Designer',          image: 'team/2017/pz.jpg',  icons: [] },
    { id: 'ra',  name: 'Rinky Abraham',         role: 'Editor',            image: 'team/2017/ra.jpg',  icons: [] },
    { id: 'ag',  name: 'Aarju Goyal',           role: 'Editor',            image: 'team/2017/ag.jpg',  icons: [] },
    { id: 'vb',  name: 'Vatsal Bhalodi',        role: 'Core Member',       image: 'team/2017/vb.jpg',  icons: [] },
    { id: 'ap',  name: 'Aarchi Patel',          role: 'Core Member',       image: 'team/2017/ap.jpg',  icons: [] },
  ];

  const team2018 = [
    { id: 'ab',  name: 'Akshay Busa',           role: 'Chairperson',       image: 'team/2018/ab.jpg',  icons: ['linkedin'] },
    { id: 'rk',  name: 'Rogin Koshy',           role: 'Vice-Chairperson',  image: 'team/2018/rk.jpg',  icons: [] },
    { id: 'am',  name: 'Abhijeet Mathur',       role: 'Secretary',         image: 'team/2018/am.jpg',  icons: [] },
    { id: 'jp',  name: 'Jenish Patel',          role: 'Secretary',         image: 'team/2018/jp.jpg',  icons: [] },
    { id: 'jt',  name: 'Jay Tandel',            role: 'Treasurer',         image: 'team/2018/jt.jpg',  icons: [] },
    { id: 'aj',  name: 'Avinash Jaiswal',       role: 'Developer',         image: 'team/2018/aj.jpg',  icons: [] },
    { id: 'nad', name: 'Noel Aby Das',          role: 'Developer',         image: 'team/2018/nad.jpg', icons: [] },
    { id: 'nk',  name: 'Nikunj Khokhar',        role: 'Problem Setter',    image: 'team/2018/nk.jpg',  icons: [] },
    { id: 'kd',  name: 'Kruti Dharaiya',        role: 'Problem Setter',    image: 'team/2018/kd.jpg',  icons: [] },
    { id: 'vs',  name: 'Vivek Shah',            role: 'Problem Setter',    image: 'team/2018/vs.jpg',  icons: [] },
    { id: 'va',  name: 'Vedansh Agarwal',       role: 'Designer',          image: 'team/2018/va.jpg',  icons: [] },
    { id: 'sn',  name: 'Sonal Nipane',          role: 'Editor',            image: 'team/2018/sn.jpg',  icons: [] },
    { id: 'sp',  name: 'Siddharth Panikath',    role: 'Editor',            image: 'team/2018/sp.jpg',  icons: [] },
    { id: 'pp',  name: 'Parthav Patel',         role: 'Core Member',       image: 'team/2018/pp.jpg',  icons: [] },
    { id: 'ms',  name: 'Mansi Sampat',          role: 'Core Member',       image: 'team/2018/ms.jpg',  icons: [] },
    { id: 'dm',  name: 'Deep Mistry',           role: 'Core Member',       image: 'team/2018/dm.jpg',  icons: [] },
  ];

  const team2019 = [
    { id: 'vd',  name: 'Vedant Dalal',          role: 'Chairperson',       image: 'team/2019/vd.jpg',  icons: ['linkedin'] },
    { id: 'sa',  name: 'Subham Agrawal',        role: 'Vice-Chairperson',  image: 'team/2019/sa.jpg',  icons: [] },
    { id: 'ag',  name: 'Akash Gangani',         role: 'Secretary',         image: 'team/2019/ag.jpg',  icons: [] },
    { id: 'hc',  name: 'Hemant Chourasia',      role: 'Secretary',         image: 'team/2019/hc.jpg',  icons: [] },
    { id: 'db',  name: 'Devanshi Bhatia',       role: 'Treasurer',         image: 'team/2019/db.jpg',  icons: [] },
    { id: 'hs',  name: 'Harshit Sodagar',       role: 'Treasurer',         image: 'team/2019/hs.jpg',  icons: [] },
    { id: 'rs',  name: 'Rajat Sharma',          role: 'Developer',         image: 'team/2019/rs.jpg',  icons: [] },
    { id: 'jd',  name: 'Jay Rathod',            role: 'Developer',         image: 'team/2019/jd.jpg',  icons: [] },
    { id: 'kg',  name: 'Keshav Goyal',          role: 'Developer',         image: 'team/2019/kg.jpg',  icons: [] },
    { id: 'rk',  name: 'Rishabh Kumar',         role: 'Problem Setter',    image: 'team/2019/rk.jpg',  icons: [] },
    { id: 'rg',  name: 'Ronik Gandhi',          role: 'Problem Setter',    image: 'team/2019/rg.jpg',  icons: [] },
    { id: 'pj',  name: 'Punit Jain',            role: 'Problem Setter',    image: 'team/2019/pj.jpg',  icons: [] },
    { id: 'kk',  name: 'Kunal Katariya',        role: 'Designer',          image: 'team/2019/kk.jpg',  icons: [] },
    { id: 'kgi', name: 'Kaneesha Gandhi',       role: 'Editor',            image: 'team/2019/kgi.jpg', icons: [] },
    { id: 'ij',  name: 'Ishank Jain',           role: 'Editor',            image: 'team/2019/ij.jpg',  icons: [] },
    { id: 'js',  name: 'Siddharth Kulkarni',    role: 'Designer',          image: 'team/2019/js.jpg',  icons: [] },
    { id: 'pn',  name: 'Priya Patel',           role: 'Core Member',       image: 'team/2019/pn.jpg',  icons: [] },
  ];

  const team2020 = [
    { id: 'ds',  name: 'Darshil Savaliya',      role: 'Chairperson',       image: 'team/2020/ds.jpg',  icons: ['linkedin'] },
    { id: 'yk',  name: 'Yamini Kabra',          role: 'Vice-Chairperson',  image: 'team/2020/yk.jpg',  icons: [] },
    { id: 'ss',  name: 'Shikhar Sarang',        role: 'Secretary',         image: 'team/2020/ss.jpg',  icons: [] },
    { id: 'sp',  name: 'Smit Patel',            role: 'Secretary',         image: 'team/2020/sp.jpg',  icons: [] },
    { id: 'sbe', name: 'Shruti Bhatt',          role: 'Treasurer',         image: 'team/2020/sbe.jpg', icons: [] },
    { id: 'jc',  name: 'Jay Chawla',            role: 'Treasurer',         image: 'team/2020/jc.jpg',  icons: [] },
    { id: 'rb',  name: 'Rohit Bakoliya',        role: 'Developer',         image: 'team/2020/rb.jpg',  icons: [] },
    { id: 'hu',  name: 'Hardik Upadhyay',       role: 'Developer',         image: 'team/2020/hu.jpg',  icons: [] },
    { id: 'sb',  name: 'Sahil Bondre',          role: 'Developer',         image: 'team/2020/sb.jpg',  icons: [] },
    { id: 'jg',  name: 'Jitendra Jat',          role: 'Problem Setter',    image: 'team/2020/jg.jpg',  icons: [] },
    { id: 'jja', name: 'Jignesh Jinjala',       role: 'Problem Setter',    image: 'team/2020/jja.jpg', icons: [] },
    { id: 'sd',  name: 'Shivangi Dubey',        role: 'Problem Setter',    image: 'team/2020/sd.jpg',  icons: [] },
    { id: 'rs',  name: 'Riya Singhal',          role: 'Designer',          image: 'team/2020/rs.jpg',  icons: [] },
    { id: 'kr',  name: 'Krunal Rank',           role: 'Designer',          image: 'team/2020/kr.jpg',  icons: [] },
    { id: 'jj',  name: 'Jeet Ganatra',          role: 'Editor',            image: 'team/2020/jj.jpg',  icons: [] },
    { id: 'mk',  name: 'Mihir Khambhati',       role: 'Core Member',       image: 'team/2020/mk.jpg',  icons: [] },
    { id: 'kp',  name: 'Krupal Panchasara',     role: 'Core Member',       image: 'team/2020/kp.jpg',  icons: [] },
  ];

  const team2021 = [
    { id: 'kg',  name: 'Keshav Gautam',        role: 'Chairperson',       image: 'team/2021/kg.jpg',  icons: ['email'] },
    { id: 'gk',  name: 'Gaurav Kumar',          role: 'Vice-Chairperson',  image: 'team/2021/gk.jpg',  icons: ['email'] },
    { id: 'jv',  name: 'Jaina Vaishnav',        role: 'Secretary',         image: 'team/2021/jv.jpg',  icons: ['email'] },
    { id: 'rs',  name: 'Riya Sharma',           role: 'Secretary',         image: 'team/2021/rs.jpg',  icons: ['email'] },
    { id: 'pp',  name: 'Parva Patel',           role: 'Treasurer',         image: 'team/2021/pp.jpg',  icons: ['email'] },
    { id: 'ps',  name: 'Prince Shah',           role: 'Treasurer',         image: 'team/2021/ps.jpg',  icons: ['email'] },
    { id: 'pd',  name: 'Prashant Dodiya',       role: 'Developer',         image: 'team/2021/pd.jpg',  icons: ['email'] },
    { id: 'sp',  name: 'Shlok Patel',           role: 'Developer',         image: 'team/2021/sp.jpg',  icons: ['email'] },
    { id: 'sba', name: 'Shankhanil Borthakur',  role: 'Developer',         image: 'team/2021/sba.jpg', icons: ['email'] },
    { id: 'hm',  name: 'Harsh Malvi',           role: 'Problem Setter',    image: 'team/2021/hm.jpg',  icons: ['email'] },
    { id: 'mo',  name: 'Mustafa Officewala',    role: 'Problem Setter',    image: 'team/2021/mo.jpg',  icons: ['email'] },
    { id: 'sb',  name: 'Shubham Bhadada',       role: 'Problem Setter',    image: 'team/2021/sb.jpg',  icons: ['email'] },
    { id: 'mk',  name: 'Mitali Kapoor',         role: 'Designer',          image: 'team/2021/mk.jpg',  icons: ['email'] },
    { id: 'da',  name: 'Danish Ahmed',          role: 'Designer',          image: 'team/2021/da.jpg',  icons: ['email'] },
    { id: 'ac',  name: 'Akanksha Chaurasia',    role: 'Editor',            image: 'team/2021/ac.jpg',  icons: ['email'] },
    { id: 'mb',  name: 'Manish Bawkar',         role: 'Core Member',       image: 'team/2021/mb.jpg',  icons: ['email'] },
    { id: 'at',  name: 'Astel Thottankara',     role: 'Core Member',       image: 'team/2021/at.jpg',  icons: ['email'] },
  ];

  const team2022 = [
    { id: 'vt',  name: 'Vishvesh Trivedi',      role: 'Chairperson',       image: 'team/2022/vt.jpg',  icons: ['linkedin'] },
    { id: 'as',  name: 'Arya Shahi',            role: 'Vice-Chairperson',  image: 'team/2022/as.jpg',  icons: ['linkedin'] },
    { id: 'hn',  name: 'Harshil Nakum',         role: 'Secretary',         image: 'team/2022/hn.jpg',  icons: ['linkedin'] },
    { id: 'nj',  name: 'Nirdeshi Jotangia',     role: 'Secretary',         image: 'team/2022/nj.jpg',  icons: ['linkedin'] },
    { id: 'ys',  name: 'Yash Shah',             role: 'Treasurer',         image: 'team/2022/ys.jpg',  icons: ['linkedin'] },
    { id: 'mn',  name: 'Mudit Nema',            role: 'Treasurer',         image: 'team/2022/mn.jpg',  icons: ['linkedin'] },
    { id: 'pk',  name: 'Prince Kumar',          role: 'Problem Setter',    image: 'team/2022/pk.jpg',  icons: ['linkedin'] },
    { id: 'bd',  name: 'Bhavik Dholakiya',      role: 'Problem Setter',    image: 'team/2022/bd.jpg',  icons: ['linkedin'] },
    { id: 'sp',  name: 'Sneh Patel',            role: 'Problem Setter',    image: 'team/2022/sp.jpg',  icons: ['linkedin'] },
    { id: 'sb',  name: 'Sneharsh Belsare',      role: 'Developer',         image: 'team/2022/sb.jpg',  icons: ['linkedin'] },
    { id: 'ar',  name: 'Aniket Rana',           role: 'Developer',         image: 'team/2022/ar.jpg',  icons: ['linkedin'] },
    { id: 'ps',  name: 'Pakhi Shrivastava',     role: 'Developer',         image: 'team/2022/ps.jpg',  icons: ['linkedin'] },
    { id: 'ts',  name: 'Tanishka Sonavane',     role: 'Designer',          image: 'team/2022/ts.jpg',  icons: ['linkedin'] },
    { id: 'ml',  name: 'Manish Lalwani',        role: 'Designer',          image: 'team/2022/ml.jpg',  icons: ['linkedin'] },
    { id: 'us',  name: 'Umar Sharieff',         role: 'Editor',            image: 'team/2022/us.jpg',  icons: ['linkedin'] },
    { id: 'dp',  name: 'Dev Patel',             role: 'Core Member',       image: 'team/2022/dp.jpg',  icons: ['linkedin'] },
    { id: 'vtu', name: 'Vivek Tangudu',         role: 'Core Member',       image: 'team/2022/vtu.jpg', icons: ['linkedin'] },
  ];

  const team2023 = [
    { id: 'gs',  name: 'Garvit Shah',           role: 'Chairperson',       image: 'team/2023/gs.jpg',  icons: ['linkedin'] },
    { id: 'bh',  name: 'Bhavya Hirani',         role: 'Vice-Chairperson',  image: 'team/2023/bh.jpg',  icons: ['linkedin'] },
    { id: 'sd',  name: 'Swayam Desai',          role: 'Secretary',         image: 'team/2023/sd.jpg',  icons: ['linkedin'] },
    { id: 'rj',  name: 'Rushil Jariwala',       role: 'Secretary',         image: 'team/2023/rj.jpg',  icons: ['linkedin'] },
    { id: 'ak',  name: 'Anushka Kundu',         role: 'Treasurer',         image: 'team/2023/ak.jpg',  icons: ['linkedin'] },
    { id: 'mc',  name: 'Manav Chauhan',         role: 'Treasurer',         image: 'team/2023/mc.jpg',  icons: ['linkedin'] },
    { id: 'rr',  name: 'Rutvik Ranpariya',      role: 'Problem Setter',    image: 'team/2023/rr.jpg',  icons: ['linkedin'] },
    { id: 'yd',  name: 'Yagnik Dhameliya',      role: 'Problem Setter',    image: 'team/2023/yd.jpg',  icons: ['linkedin'] },
    { id: 'jm',  name: 'Jainesh Machhi',        role: 'Problem Setter',    image: 'team/2023/jm.jpg',  icons: ['linkedin'] },
    { id: 'vi',  name: 'Vinayaka Iyer',         role: 'Developer',         image: 'team/2023/vi.jpg',  icons: ['linkedin'] },
    { id: 'ss',  name: 'Shubh Suthar',          role: 'Developer',         image: 'team/2023/ss.jpg',  icons: ['linkedin'] },
    { id: 'mt',  name: 'Mahesh Thakkar',        role: 'Developer',         image: 'team/2023/mt.jpg',  icons: ['linkedin'] },
    { id: 'rm',  name: 'Raj Modh',              role: 'Designer',          image: 'team/2023/rm.jpg',  icons: ['linkedin'] },
    { id: 'kp',  name: 'Krishna Pathak',        role: 'Designer',          image: 'team/2023/kp.jpg',  icons: ['linkedin'] },
    { id: 'yv',  name: 'Yatra Vaghasia',        role: 'Editor',            image: 'team/2023/yv.jpg',  icons: ['linkedin'] },
    { id: 'kb',  name: 'Kaushik Bhowmick',      role: 'Core Member',       image: 'team/2023/kb.jpg',  icons: ['linkedin'] },
    { id: 'vc',  name: 'Ved Chadderwala',       role: 'Core Member',       image: 'team/2023/vc.jpg',  icons: ['linkedin'] },
    { id: 'ps',  name: 'Parth Sharma',          role: 'Core Member',       image: 'team/2023/ps.jpg',  icons: ['linkedin'] },
  ];

  const team2024 = [
    { id: 'pp',  name: 'Param Pathak',          role: 'Chairperson',       image: 'team/2024/pp.jpg',  icons: ['email', 'linkedin', 'github'] },
    { id: 'vk',  name: 'Vatsal Koisa',          role: 'Vice-Chairperson',  image: 'team/2024/vk.jpg',  icons: ['email', 'linkedin', 'github'] },
    { id: 'as',  name: 'Anoushka Sharma',       role: 'Secretary',         image: 'team/2024/as.jpg',  icons: ['email', 'linkedin', 'github'] },
    { id: 'rv',  name: 'Raj Vadodaria',         role: 'Secretary',         image: 'team/2024/rv.jpg',  icons: ['email', 'linkedin'] },
    { id: 'hj',  name: 'Hanusha Jain',          role: 'Treasurer',         image: 'team/2024/hj.jpg',  icons: ['email', 'linkedin', 'github'] },
    { id: 'sd',  name: 'Shivam Dhamesha',       role: 'Treasurer',         image: 'team/2024/sd.jpg',  icons: ['email', 'linkedin', 'github'] },
    { id: 'lj',  name: 'Lakshita Jawandhiya',   role: 'Community Head',    image: 'team/2024/lj.jpg',  icons: ['email', 'linkedin', 'github'] },
    { id: 'bd',  name: 'Bhavik Dodda',          role: 'Developer',         image: 'team/2024/bd.jpg',  icons: ['twitter', 'email', 'linkedin', 'github'] },
    { id: 'lp',  name: 'Lavanya Pinjarkar',     role: 'Developer',         image: 'team/2024/lp.jpg',  icons: ['email', 'linkedin', 'github'] },
    { id: 'yp',  name: 'Yash Patel',            role: 'Developer',         image: 'team/2024/yp.jpg',  icons: ['email', 'linkedin', 'github'] },
    { id: 'dm',  name: 'Dweep Modi',            role: 'Problem Setter',    image: 'team/2024/dm.jpg',  icons: ['email', 'linkedin'] },
    { id: 'hm',  name: 'Harshal Malaviya',      role: 'Problem Setter',    image: 'team/2024/hm.jpg',  icons: ['email', 'linkedin', 'github'] },
    { id: 'pj',  name: 'Parthiv Jasoliya',      role: 'Problem Setter',    image: 'team/2024/pj.jpg',  icons: ['twitter', 'email', 'linkedin', 'github'] },
    { id: 'ab',  name: 'Aasutosh Baraiya',      role: 'Designer',          image: 'team/2024/ab.jpg',  icons: ['email', 'linkedin', 'github'] },
    { id: 'ppl', name: 'Priya Patel',           role: 'Designer',          image: 'team/2024/ppl.jpg', icons: ['email', 'linkedin'] },
    { id: 'ar',  name: 'Aditya Rai',            role: 'Core Member',       image: 'team/2024/ar.jpg',  icons: ['linkedin'] },
    { id: 'dv',  name: 'Darshan Vekariya',      role: 'Core Member',       image: 'team/2024/dv.jpg',  icons: ['twitter', 'email', 'linkedin', 'github'] },
    { id: 'vp',  name: 'Vandit Patel',          role: 'Core Member',       image: 'team/2024/vp.jpg',  icons: ['linkedin', 'github'] },
  ];

  const allTeamsData: Record<number, any[]> = {
    2025: team2025,
    2024: team2024,
    2023: team2023,
    2022: team2022,
    2021: team2021,
    2020: team2020,
    2019: team2019,
    2018: team2018,
    2017: team2017,
    2016: team2016,
    2015: team2015,
    2014: team2014,
    2013: team2013,
    2012: team2012,
    2011: team2011,
  };

  const currentTeam = useMemo(() => {
    return allTeamsData[selectedYear] || [];
  }, [selectedYear]);

  const roleGroups = [
    { title: 'The Chairperson', roles: ['Chairperson'] },
    { title: 'Leadership Core', roles: ['Vice-Chairperson', 'Community Head'] },
    { title: 'Secretariat & Treasury', roles: ['Secretary', 'Treasurer'] },
    { title: 'Developers', roles: ['Developer', 'Web Developer'] },
    { title: 'Problem Setters', roles: ['Problem Setter'] },
    { title: 'Designers', roles: ['Designer'] },
    { title: 'Editors', roles: ['Editor'] },
    { title: 'Core Members', roles: ['Core Member'] }
  ];

  const groupedTeam = useMemo(() => {
    return roleGroups.map(group => {
      const members = currentTeam.filter(m => group.roles.includes(m.role));
      return { ...group, members };
    }).filter(group => group.members.length > 0);
  }, [currentTeam]);

  const initScrollAnimation = () => {
    if (scrollTweenRef.current) {
      scrollTweenRef.current.scrollTrigger?.kill();
      scrollTweenRef.current.kill();
    }
    ScrollTrigger.refresh();

    if (!horizontalWrapperRef.current) return;

    const panels = gsap.utils.toArray<HTMLElement>('.horizontal-panel', horizontalWrapperRef.current);
    if (panels.length < 2) return;

    scrollTweenRef.current = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontalWrapperRef.current,
        pin: true,
        scrub: 1.5,
        end: () => "+=" + (horizontalWrapperRef.current?.offsetWidth || 1000) * (panels.length * 0.5)
      }
    });
  };

  useEffect(() => {
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
    }
    
    initScrollAnimation();

    return () => {
      if (scrollTweenRef.current) {
        scrollTweenRef.current.scrollTrigger?.kill();
        scrollTweenRef.current.kill();
      }
    };
  }, [selectedYear]);


  const goHome = () => {
    if (scrollTweenRef.current && scrollTweenRef.current.scrollTrigger) {
      if (lenis) {
        lenis.scrollTo(scrollTweenRef.current.scrollTrigger.start, { duration: 1.5 });
      } else {
        window.scrollTo({ top: scrollTweenRef.current.scrollTrigger.start, behavior: 'smooth' });
      }
    }
  };

  const goExit = () => {
    const section = document.getElementById('team-section');
    if (section && section.nextElementSibling) {
      if (lenis) {
        lenis.scrollTo(section.nextElementSibling as HTMLElement, { duration: 1.5, offset: 0 });
      } else {
        section.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (scrollTweenRef.current && scrollTweenRef.current.scrollTrigger) {
      if (lenis) {
        lenis.scrollTo(scrollTweenRef.current.scrollTrigger.end, { duration: 1.5 });
      } else {
        window.scrollTo({ top: scrollTweenRef.current.scrollTrigger.end, behavior: 'smooth' });
      }
    }
  };

  const getImageUrl = (path: string) => {
    return import.meta.env.BASE_URL + path;
  };

  const groupThemes = [
    { name: 'text-white', borderColor: 'border-white' },
  ];
  const getGroupTheme = (_idx: number) => {
    return groupThemes[0];
  };

  return (
    <section
      id="team-section"
      className="relative z-10 w-full bg-black overflow-hidden"
    >
      <div ref={horizontalWrapperRef} className="flex h-[100svh] w-full flex-nowrap will-change-transform relative">
        
        {/* Navigation Buttons */}
        <div className="absolute top-6 left-6 md:top-12 md:left-12 z-50 flex gap-4 pointer-events-auto">
          <button onClick={goHome} className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-flax-smoke-500 text-black flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.5)] border-2 border-black/10" title="Go to Home">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </button>
          <button onClick={goExit} className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-flax-smoke-500 text-black flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.5)] border-2 border-black/10" title="Exit Section">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {/* INTRO PANEL */}
        <div className="horizontal-panel shrink-0 w-screen h-[100svh] flex flex-col items-center justify-center bg-[#202623] relative border-r border-white/10 px-4">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-flax-smoke-500/20 via-transparent to-transparent"></div>
          
          <h3 className="text-6xl md:text-[8rem] leading-none font-black text-flax-smoke-50 uppercase tracking-tighter mb-12 drop-shadow-2xl z-10 text-center">
            OUR TEAM
          </h3>
          
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 max-w-5xl z-10">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => {
                  setSelectedYear(year);
                  goHome();
                }}

                className={`px-6 py-3 rounded-full text-sm md:text-lg font-black transition-all duration-500 tracking-widest shadow-2xl border ${
                  selectedYear === year
                    ? 'bg-flax-smoke-500 text-black border-flax-smoke-500 scale-110'
                    : 'bg-black/50 text-flax-smoke-500 border-flax-smoke-800 hover:border-flax-smoke-500 hover:text-flax-smoke-200 backdrop-blur-md'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {groupedTeam.length === 0 && (
            <div className="mt-12 text-flax-smoke-600 text-xl italic z-10">
              Team data for {selectedYear} is currently being updated.
            </div>
          )}
        </div>

        {/* TEAM GROUPS */}
        {groupedTeam.map((group, gIdx) => (
          <div 
            key={group.title}
            className="horizontal-panel shrink-0 w-screen h-[100svh] flex relative bg-[#202623] md:py-12 lg:py-16 md:px-12 lg:px-24"
          >
            <div className={`flex flex-col md:flex-row h-full w-full md:rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border-0 md:border-[6px] ${getGroupTheme(gIdx).borderColor}`}>
              {group.members.map((member) => (
                <div 
                  key={member.id}
                  className="relative flex-1 h-full w-full group overflow-hidden transition-[flex-grow] duration-500 ease-out hover:flex-[2] md:hover:flex-[1.5]"
                >
                  <div className="absolute inset-0 w-full h-full bg-[#111] flex items-center justify-center overflow-hidden">
                    <img 
                      src={getImageUrl(member.image)} 
                      alt={member.name}
                      className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105 origin-top" 
                      onError={(e) => { (e.target as HTMLImageElement).src = getImageUrl('group.png'); }}
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity duration-700 pointer-events-none"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 flex flex-col justify-end h-full pointer-events-none">
                    <div className="translate-y-8 opacity-70 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                      <p className="text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-2 md:mb-4 drop-shadow-md text-white/90">{member.role}</p>
                      <h2 className={`text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-2 md:mb-6 uppercase leading-[0.9] drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] ${getGroupTheme(gIdx).name}`}>{member.name}</h2>
                      
                      <div className="flex gap-3 md:gap-4 pointer-events-auto">
                        {member.icons.includes('twitter') && (
                          <a href="#" className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#0B0B0A]/80 text-white flex items-center justify-center backdrop-blur-md hover:bg-flax-smoke-500 hover:text-black transition-all duration-300 shadow-2xl border border-white/20">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                          </a>
                        )}
                        {member.icons.includes('email') && (
                          <a href="#" className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#0B0B0A]/80 text-white flex items-center justify-center backdrop-blur-md hover:bg-flax-smoke-500 hover:text-black transition-all duration-300 shadow-2xl border border-white/20">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                          </a>
                        )}
                        {member.icons.includes('linkedin') && (
                          <a href="#" className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#0B0B0A]/80 text-white flex items-center justify-center backdrop-blur-md hover:bg-flax-smoke-500 hover:text-black transition-all duration-300 shadow-2xl border border-white/20">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                          </a>
                        )}
                        {member.icons.includes('github') && (
                          <a href="#" className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#0B0B0A]/80 text-white flex items-center justify-center backdrop-blur-md hover:bg-flax-smoke-500 hover:text-black transition-all duration-300 shadow-2xl border border-white/20">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
