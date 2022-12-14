import React from "react";
import pay from '../images/Pay.png';
import Homecss from '../Css/Home.css';
import sv from '../images/service.jpg';
import sv1 from '../images/service.png';
import sv2 from '../images/service1.jpg';
import logo from '../images/Logo.png';
import banner from '../images/banner.png';
import banner02 from '../images/Banner02.png';
import banner03 from '../images/Banner03.png';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm, Controller } from 'react-hook-form';

export default function Home() {


    const [placeName, setPlaceName] = useState(null)
    const onSubmit = (data) => console.log(data);
    const {
        register,
        handleSubmit,
        watch,
        label,
        required,


    } = useForm();

    const handleChange = (event) => {
        console.log(event);
        const target = event.target;
        const value = target.value;
        const name = target.name;

        console.log(name);
        let data = { ...placeName };
        data[name] = value;
    };


    useEffect(() => {

        fetch('http://localhost:8080/mainticket/ticket')
            .then((response) => response.json())
            .then((response) => {
                setPlaceName(response)
                console.log(response)
            });
    }, [])


    var placesFrom = []
    if (placeName != null) {

        placesFrom = placeName.map((item) => {
            return (

                <option value={item.placeTo.place}>
                    {item.placeFrom.place}
                </option>
            )

        })
    }

    var placesTo = []
    if (placeName !== null) {
        placesTo = placeName.map((item) => {

            return (

                <option >
                    {item.placeTo.place}
                </option>
            )
        })
    }







    return (

        <>
            <div>
                {/* Banner */}


                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src={banner} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5></h5>
                                <p></p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src={banner02} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5></h5>
                                <p></p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={banner03} class="d-block w-100 mx-auto" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5></h5>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>

                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>

                    </button>
                </div>
                {/* END banner */}





            </div>
            {/* Menu */}
            <div className="container" id="menu-header">

                {/* MENU-HEADER */}

                <ul className="list-group list-group-horizontal"  >
                    <li class="list-group-item pill active" data-bs-toggle="collapse" data-bs-target="#buyTicket"  >
                        <i class="fa-solid fa-plane me-2 " />
                        Mua v??</li>
                    <li class="list-group-item " data-bs-toggle="collapse" data-bs-target="#locationManagement" >
                        <i class="fa-solid fa-book me-2" />
                        Qu???n l?? ?????t ch???
                    </li>
                    <li class="list-group-item" data-bs-toggle="collapse" data-bs-target="#service" >
                        <i class="fa-solid fa-bag-shopping me-2" />
                        D???ch v??? h??? tr???
                    </li>
                    <li class="list-group-item" data-bs-toggle="collapse" data-bs-target="#procedure" >
                        <i class="fa-solid fa-credit-card me-2" />
                        L??m th??? t???c
                    </li>
                    <li class="list-group-item" data-bs-toggle="collapse" data-bs-target="#statusFlight" >
                        <i class="fa-regular fa-clock me-2" />
                        T??nh tr???ng chuy???n bay
                    </li>
                </ul>
                {/* END */}

                {/* MENU FOOTER */}
                <div class="collapse show" id="buyTicket" data-bs-toggle="collapse" data-bs-parent="#menu-header">
                    <div class="card card-header">
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <p class="nav-link active" data-bs-toggle="collapse" data-bs-target="#plane">Chuy???n bay</p>
                            </li>
                            <li class="nav-item">
                                <p class="nav-link " data-bs-toggle="collapse" data-bs-target="#fly-hotel"> Chuy???n bay+Kh??ch s???n</p>
                            </li>
                            <li class="nav-item">
                                <p class="nav-link" data-bs-toggle="collapse" data-bs-target="#buyTicket">Kh??ch s???n</p>
                            </li>
                            <li class="nav-item">
                                <p class="nav-link" data-bs-toggle="collapse" data-bs-target="#buyTicket">Chuy???n bay</p>
                            </li>
                        </ul>


                        {/* BUY TICKET */}
                        <div class="collapse show" id="plane" data-bs-parent="#buyTicket">
                            <form className="row card-body" action="https://62bafae8573ca8f832901b9c.mockapi.io/user" method="GET"
                                onSubmit={handleSubmit(onSubmit)}
                            >

                                <p className="col-sm-10  col-md-3 ">
                                    ??i???m ??i

                                    <select className="form-control "
                                        {...register('ticketType', { required: true })} onChange={(e) => handleChange(e)} >
                                        {placesFrom}
                                    </select>
                                </p>
                                <p className="col-sm-10  col-md-3 ">
                                    ??i???m ?????n

                                    <select name="ticketType" className="form-control "  >
                                        {placesTo}

                                    </select>
                                </p>

                                <p className="col-sm-10  col-md-2   ">
                                    Ng??y ??i
                                    <input type="date" className="form-control" name="" />
                                </p>

                                <p className="col-sm-10  col-md-2   ">
                                    Ng??y v???
                                    <input type="date" className="form-control" name="" />
                                </p>

                                <p className="col-sm-10  col-md-2  ">
                                    S??? l?????ng h??nh kh??ch
                                    <input type="number" className="form-control" placeholder="1" />
                                </p>
                                <Link to='ticket'>
                                    <input type="button" value="T??m chuy???n bay" className="btn btn-warning col-md-2" />
                                </Link>
                                <p className="mt-3 row">
                                    C??c h??nh th???c thanh to??n:

                                    <img src={pay} className='col-sm-1 col-md-12 ms-3'>
                                    </img>
                                </p>

                                <p class="alert alert-warning alert-dismissible fade show " role="alert">
                                    <strong>TH??NG TIN QUAN TR???NG:</strong>
                                    <br />
                                    Qu?? kh??ch ??ang s??? d???ng website t???i th??? tr?????ng <strong>Vi???t Nam </strong>v?? ?????ng ti???n thanh to??n l?? <strong> ?????ng Vi???t Nam (VN??)</strong>.
                                    <br />
                                    Theo quy ?????nh c???a B??? T??i ch??nh th?? ch??? c??c giao d???ch thanh to??n b???ng ?????ng Vi???t Nam (VN??) m???i ???????c xu???t h??a ????n GTGT ??i???n t???.
                                    N???u c???n thanh to??n b???ng ?????ng ti???n kh??c, Qu?? kh??ch vui l??ng ?????i Qu???c gia/V??ng (t???i ????y).

                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" />

                                </p>


                            </form>
                        </div>
                        <div className="collapse" id="fly-hotel" data-bs-parent="#buyTicket">
                            alo
                        </div>

                    </div>
                </div>
                {/* locationManagement */}
                <div className="collapse" id="locationManagement" data-bs-toggle="collapse" data-bs-parent="#menu-header" >
                    <div className="card card-header">

                        <ul class="list-group">
                            <li class="list-group-item">
                                <p class=" collapse-header active my-auto" data-bs-toggle="collapse" data-bs-target="#flightSelection">
                                    <i class="fa-regular fa-circle-play play-icon h5 me-2" />
                                    C??C L???A CH???N CHO CHUY???N BAY
                                </p>
                                <div className="collapse show " id="flightSelection" data-bs-parent="#locationManagement" >
                                    <br />
                                    <span class="badge rounded-pill bg-primary opacity-75">S??? v?? ??i???n t???</span>
                                    <form className="card-body row">
                                        <p className="col-sm-10 col-md-5">
                                            <input type="text" className="form-control" name="" placeholder="S??? v?? ??i???n t??? (738xxxxx)" />
                                        </p>
                                        <p className="col-sm-10 col-md-5">
                                            <input type="text" className="form-control" name="" placeholder="H???" />
                                        </p>
                                        <p className="col-sm-10 col-md-2">
                                            <input type="submit" className="btn btn-warning" name="" value="T??m ki???m" />
                                        </p>
                                    </form>
                                    <span class="badge rounded-pill bg-primary opacity-75">M?? ?????t ch???</span>
                                    <form className="card-body row">

                                        <p className="col-sm-10 col-md-3">
                                            <input type="text" name='' className="form-control" placeholder="M?? ?????t ch??? (PNR)" />
                                        </p>
                                        <p className="col-sm-10 col-md-3">
                                            <input type="text" className="form-control" name='' placeholder="H???" />
                                        </p>
                                        <p className="col-sm-10 col-md-3">
                                            <input type="email" name='' className="form-control" placeholder="Email" />
                                        </p>
                                        <p className="col-sm-10 col-md-3">
                                            <input type="submit" className="btn btn-warning" name='' value="T??m ki???n" />
                                        </p>
                                    </form>

                                </div>

                            </li>
                            <li class="list-group-item">
                                <p class="my-auto " data-bs-toggle="collapse" data-bs-target="#pay">
                                    <i class="fa-regular fa-circle-play play-icon h5 me-2" />
                                    THANH TO??N M?? ?????T CH??? TR??? SAU
                                </p>
                                <div className="collapse" id="pay" data-bs-parent="#locationManagement" >

                                    <p>
                                        L???a ch???n c??c h??nh th???c thanh to??n:
                                    </p>
                                    <img src={pay} className="col-md-12" />
                                    <p>
                                        * Ch??? ??p d???ng c??c m?? ?????t ch??? tr??? sau ???????c ?????t t???i website www.cloudairlines.com ho???c ???ng d???ng di ?????ng Cloud Airlines.
                                    </p>


                                </div>


                            </li>
                            <li class="list-group-item">
                                <p className="my-auto" data-bs-toggle="collapse" data-bs-target="#FlightChange">
                                    <i class="fa-regular fa-circle-play play-icon h5 me-2" />
                                    ?????I CHUY???N BAY
                                </p>
                                <div className="collapse" id="FlightChange" data-bs-parent="#locationManagement" >
                                    <br />
                                    <span class="badge rounded-pill bg-primary opacity-75">V?? c???a b???n</span>
                                    <form className="row card-body" >
                                        <p className="col-sm-12 col-md-1  ">
                                            Lo???i v??
                                            <select name="ticketType" className="form-control"  >
                                                <option name=" ">
                                                    M???t chi???u
                                                </option>

                                                <option name=" ">
                                                    Kh??? h???i
                                                </option>

                                                <option name=" ">
                                                    Nhi???u ch???ng
                                                </option>


                                            </select>
                                        </p>
                                        <p className="col-sm-10  col-md-3 ">
                                            ??i???m ??i

                                            <select name="ticketType" className="form-control "  >
                                                <option name=" ">
                                                    H?? N???i
                                                </option>

                                                <option name=" ">
                                                    TP.HCM
                                                </option>

                                                <option name=" ">
                                                    Vinh
                                                </option>


                                            </select>
                                        </p>
                                        <p className="col-sm-10  col-md-3 ">
                                            ??i???m ?????n

                                            <select name="ticketType" className="form-control "  >
                                                <option name=" ">
                                                    H?? N???i
                                                </option>

                                                <option name=" ">
                                                    TP.HCM
                                                </option>

                                                <option name=" ">
                                                    Vinh
                                                </option>


                                            </select>
                                        </p>

                                        <p className="col-sm-10  col-md-3   ">
                                            M?? s??? v??/ M?? ?????t ch???
                                            <input type="text" className="form-control" name="" />
                                        </p>

                                        <p className="col-sm-10  col-md-2  ">
                                            S??? l?????ng h??nh kh??ch
                                            <input type="number" className="form-control" placeholder="1" />
                                        </p>
                                        <p className="row">
                                            <span class="badge rounded-pill bg-primary opacity-75 col-md-1">V?? c???a b???n</span>
                                        </p>
                                        <p className="col-sm-12 col-md-2  ">
                                            Lo???i v??
                                            <select name="ticketType" className="form-control"  >
                                                <option name=" ">
                                                    M???t chi???u
                                                </option>

                                                <option name=" ">
                                                    Kh??? h???i
                                                </option>

                                                <option name=" ">
                                                    Nhi???u ch???ng
                                                </option>


                                            </select>
                                        </p>

                                        <p className="col-sm-10  col-md-2 ">
                                            ??i???m ??i

                                            <select name="ticketType" className="form-control "  >
                                                <option name=" ">
                                                    H?? N???i
                                                </option>

                                                <option name=" ">
                                                    TP.HCM
                                                </option>

                                                <option name=" ">
                                                    Vinh
                                                </option>


                                            </select>
                                        </p>
                                        <p className="col-sm-10  col-md-2 ">
                                            ??i???m ?????n

                                            <select name="ticketType" className="form-control "  >
                                                <option name=" ">
                                                    H?? N???i
                                                </option>

                                                <option name=" ">
                                                    TP.HCM
                                                </option>

                                                <option name=" ">
                                                    Vinh
                                                </option>


                                            </select>
                                        </p>

                                        <p className="col-sm-10  col-md-2   ">
                                            Ng??y ??i
                                            <input type="date" className="form-control" name="" />
                                        </p>

                                        <p className="col-sm-10  col-md-2   ">
                                            Ng??y v???
                                            <input type="date" className="form-control" name="" />
                                        </p>

                                        <p className="col-sm-10  col-md-2  ">
                                            S??? l?????ng h??nh kh??ch
                                            <input type="number" className="form-control" placeholder="1" />
                                        </p>
                                        <p className="card">
                                            <span>

                                                <strong>??i???u kho???n v?? ??i???u ki???n:</strong><br />
                                                Ch???c n??ng ?????i chuy???n bay ch??? ??p d???ng cho h??nh kh??ch mua v?? <strong>tr???c tuy???n</strong>, kh??ng ??p d???ng cho v?? mua t???i <strong>ph??ng v??</strong> ho???c ?????i l??.<br />
                                                Qu?? kh??ch h??ng vui l??ng ki???m tra ch??nh x??c th??ng tin khi x??c nh???n ?????i chuy???n bay, h???n ch??? th??ng tin sai l???ch c?? th??? ?????i chuy???n kh??ng th??nh c??ng. <br />
                                                Qu?? tr??nh th???c hi???n ?????i chuy???n bay c?? th??? <strong>ph??t sinh th??m ph??</strong> qu?? kh??ch h??ng vui l??ng xem k?? th??ng tin.
                                            </span>
                                        </p>
                                        <p>
                                            <input type="checkbox" name="" className="form-check-input me-2" required />T??i ?????ng ??
                                        </p>
                                        <input type="submit" value="T??m chuy???n bay" className="btn btn-warning col-md-2" />
                                    </form>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <p className="my-auto" data-bs-toggle="collapse" data-bs-target="#electronicBill">
                                    <i class="fa-regular fa-circle-play play-icon h5 me-2" />
                                    XU???T H??A ????N ??I???N T???
                                </p>
                                <div className="collapse" id="electronicBill" data-bs-parent="#locationManagement" >
                                    <form action="#" className="row card-body">
                                        <p className="col-sm-12 col-md-3">
                                            H??? t??n:
                                            <input type="text" className="form-control" name="" placeholder="H??? t??n" required />
                                        </p>
                                        <p className="col-sm-12 col-md-3">
                                            S??? ??i???n tho???i:
                                            <input type="text" className="form-control" name="" placeholder="S??? ??i???n tho???i" required />
                                        </p>
                                        <p className="col-sm-12 col-md-3">
                                            Email:
                                            <input type="email" className="form-control" name="" placeholder="Email" required />
                                        </p>
                                        <p className="col-sm-12 col-md-3">
                                            <input type="submit" className="btn btn-warning mt-4" name="" />
                                        </p>

                                    </form>
                                    <p>
                                        Trong v??ng 72 gi??? sau khi nh???n ???????c email th??ng b??o ho??n th??nh mua v?? m??y bay v?? d???ch v??? b??? tr??? tr??n website v?? ???ng d???ng di ?????ng c???a Cloud Airlines.<br />
                                        Qu?? kh??ch vui l??ng truy c???p t???i ????y ????? khai b??o th??ng tin xu???t h??a ????n.
                                    </p>


                                </div>




                            </li>
                        </ul>


                    </div>

                </div>

            </div>
            {/* END menu */}

            <div className="container-fluid">
                <p className="text-center h4 mt-3">
                    C??C CHUY???N BAY ???????C Y??U TH??CH

                </p>

                <div className="container">
                    <hr />

                    <p className="mx-auto text-center h4 mt-4">
                        C??C D???CH V??? B??? TR???

                    </p>
                    <hr />


                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <a href="#">
                                <img src={sv} alt="" className="w-25 img-service"></img>
                                <span className="ms-3 h5">
                                    H??nh l?? tr??? tr?????c
                                </span>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <a href="#">
                                <img src={sv1} alt="" className="w-25 img-service"></img>
                                <span className="ms-3 h5">
                                    Ch???n tr?????c ch??? ng???i
                                </span>
                            </a>

                        </div>
                        <div className="col-sm-12 col-md-4">
                            <a href="#">
                                <img src={sv2} alt="" className="w-25 img-service"></img>
                                <span className="ms-3 h5">
                                    ?????t tr?????c m??n ??n
                                </span>
                            </a>
                        </div>

                    </div>


                </div>

                {/* CALL MESSAGE */}

                <a href="tel:010021235">
                    <button type="button" class="contact btn btn-primary rounded-circle"><i class="fa-solid fa-phone"></i></button>
                </a>

            </div>

        </>
    )

}
// export default Home