<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloWorldController extends Controller
{
    public function index()
    {
        sleep(30);
        return "<h1>Hello World</h1>";
    }
}
