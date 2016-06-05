<?php

namespace Lewis\Surf\Exceptions;

use Exception;
use Symfony\Component\HttpKernel\Exception\HttpException;

class ErrorHttpException extends HttpException
{
    protected $error;

    public function __construct($statusCode, $error, $message = null, Exception $previous = null, array $headers = [], $code = 0)
    {
        $this->error = $error;

        parent::__construct($statusCode, $message, $previous, $headers, $code);
    }

    public function getError()
    {
        return $this->error;
    }
}
