<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\Courses\Service;

class BaseController extends Controller
{
    public $serviceCourses;
    public $serviceMaterial;

    public function __construct(Service $serviceCourses, \App\Services\Materials\Service $serviceMaterial)
    {
        $this->serviceCourses = $serviceCourses;
        $this->serviceMaterial = $serviceMaterial;
    }
}
