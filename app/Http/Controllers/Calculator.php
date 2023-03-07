<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Calculator extends Controller
{
    protected function index()
    {
        return view('calculator');
    }
}
