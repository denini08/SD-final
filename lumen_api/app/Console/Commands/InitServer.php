<?php
/**
 *
 * PHP version >= 7.0
 *
 * @category Console_Command
 * @package  App\Console\Commands
 */

namespace App\Console\Commands;

use Exception;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

/**
 * Class deletePostsCommand
 *
 * @category Console_Command
 * @package  App\Console\Commands
 */
class InitServer extends Command
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $signature = "init:server {host=localhost} {port=3000}";

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Start the Socket-server";


    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //$host    = "127.0.0.1";
        //$port    = 3000;
        $host = $this->argument('host');
        $port = $this->argument('port');
        $message = "LUMEN-NODE";

        echo "iniciando\n";
        // don't timeout!
        set_time_limit(0);
        // create socket
        $socket = socket_create(AF_INET, SOCK_STREAM, 0) or die("Could not create socket\n");
        // bind socket to port
        $result = socket_bind($socket, $host, $port) or die("Could not bind to socket\n");
        // start listening for connections
        echo "Aguardando conexão...\n";
        $result = socket_listen($socket, 3) or die("Could not set up socket listener\n");

        // accept incoming connections
        // spawn another socket to handle communication
        $spawn = socket_accept($socket) or die("Could not accept incoming connection\n");
        // read client input
        $input = socket_read($spawn, 1024) or die("Could not read input\n");
        socket_getpeername($spawn, $end, $porta);
        // clean up input string
        $input = trim($input);
        echo "Client Message : ".$input."\n";
        echo "Endereco IP:".$end." - Porta:".$porta."\n";
        // reverse client input and send back
        $output = "name";
        socket_write($spawn, $output, strlen ($output)) or die("Could not write output\n");

        echo "Aguardando conexão...\n";

        $input = socket_read($spawn, 1024) or die("Could not read input\n");
        socket_getpeername($spawn, $end, $porta);
        // clean up input string
        $input = trim($input);
        echo "Client Message : ".$input."\n";
        echo "Endereco IP:".$end." - Porta:".$porta."\n";
        // reverse client input and send back
        $output = "name";
        socket_write($spawn, $output, strlen ($output)) or die("Could not write output\n");
        // close sockets


        socket_close($spawn);
        echo "Socket closed";
        socket_close($socket);
        echo "Socket closed";
    }
}
